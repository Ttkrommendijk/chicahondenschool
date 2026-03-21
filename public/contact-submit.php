<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

const MINIMUM_FILL_SECONDS = 3;
const MAXIMUM_FILL_SECONDS = 7200;
const MAX_SUBMISSIONS_PER_TEN_MINUTES = 5;
const MAX_SUBMISSIONS_PER_DAY = 25;

/**
 * @param array<string, mixed> $source
 */
function secret_value(array $source, string $key): string
{
    $value = $source[$key] ?? null;

    return is_scalar($value) ? trim((string) $value) : "";
}

function is_ajax_request(): bool
{
    return ($_SERVER["HTTP_X_REQUESTED_WITH"] ?? "") === "XMLHttpRequest";
}

function start_contact_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    session_set_cookie_params([
        "httponly" => true,
        "samesite" => "Lax",
        "secure" => !empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off",
    ]);
    session_start();
}

function normalize_return_to(string $value): string
{
    $trimmed = trim($value);
    if ($trimmed === "") {
        return "/contact/";
    }

    $parts = parse_url($trimmed);
    if ($parts === false) {
        return "/contact/";
    }

    $path = $parts["path"] ?? "/contact/";
    if (!is_string($path) || !str_starts_with($path, "/contact/")) {
        $path = "/contact/";
    }

    $query =
        isset($parts["query"]) && is_string($parts["query"])
            ? "?" . $parts["query"]
            : "";

    return $path . $query;
}

function submitted_lang(string $returnTo): string
{
    $parts = parse_url($returnTo);
    if (
        $parts !== false &&
        isset($parts["query"]) &&
        is_string($parts["query"])
    ) {
        $query = [];
        parse_str($parts["query"], $query);
        $lang = strtolower(trim((string) ($query["lang"] ?? "")));
        if ($lang === "en") {
            return "en";
        }
    }

    return "nl";
}

function client_ip(): string
{
    return trim((string) ($_SERVER["REMOTE_ADDR"] ?? "unknown"));
}

function log_blocked_attempt(string $reason, string $ip): void
{
    error_log(sprintf("[contact-form] blocked reason=%s ip=%s", $reason, $ip));
}

function strip_null_bytes(string $value): string
{
    return str_replace("\0", "", $value);
}

function sanitize_inline_field(string $value): string
{
    $value = strip_null_bytes($value);
    $value = str_replace(["\r", "\n"], " ", $value);
    $value = preg_replace("/\s+/", " ", $value) ?? $value;
    return trim($value);
}

function sanitize_email_field(string $value): string
{
    $value = strip_null_bytes($value);
    $value = str_replace(["\r", "\n"], "", $value);
    return trim($value);
}

function sanitize_message_field(string $value): string
{
    $value = strip_null_bytes($value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    return trim($value);
}

/**
 * @param array<string, mixed> $source
 * @param list<string> $keys
 */
function first_secret_value(array $source, array $keys): string
{
    foreach ($keys as $key) {
        $value = secret_value($source, $key);
        if ($value !== "") {
            return $value;
        }
    }

    return "";
}

/**
 * @param array<string, string> $values
 */
function redirect_url(
    string $returnTo,
    bool $sent,
    ?string $reason = null,
    array $values = [],
): string {
    $parts = parse_url($returnTo);
    $path =
        is_array($parts) && isset($parts["path"]) && is_string($parts["path"])
            ? $parts["path"]
            : "/contact/";
    $existingParams = [];

    if (
        is_array($parts) &&
        isset($parts["query"]) &&
        is_string($parts["query"])
    ) {
        parse_str($parts["query"], $existingParams);
    }

    unset($existingParams["sent"], $existingParams["reason"]);

    $params = array_merge(
        $existingParams,
        ["sent" => $sent ? "1" : "0"],
        $reason !== null ? ["reason" => $reason] : [],
        $values,
    );

    return $path . "?" . http_build_query($params);
}

function respond_json(int $status, string $message): never
{
    http_response_code($status);
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["message" => $message]);
    exit();
}

/**
 * @param array<string, string> $values
 */
function respond_failure(
    int $status,
    string $reason,
    string $message,
    string $returnTo,
    array $values = [],
): never {
    if (is_ajax_request()) {
        respond_json($status, $message);
    }

    header(
        "Location: " . redirect_url($returnTo, false, $reason, $values),
        true,
        303,
    );
    exit();
}

function respond_success(string $returnTo): never
{
    if (is_ajax_request()) {
        respond_json(200, "OK");
    }

    header("Location: " . redirect_url($returnTo, true), true, 303);
    exit();
}

/**
 * @return array{
 *   subject: string,
 *   greeting: string,
 *   message: string,
 *   closing: string,
 *   signature: string,
 *   altBody: string
 * }
 */
function confirmation_copy(string $lang): array
{
    if ($lang === "en") {
        return [
            "subject" => "Thank you for your request",
            "greeting" => "Hey, nice that you reached out to me.",
            "message" =>
                "I will contact you as soon as possible, but if you want you can also reach me by WhatsApp or phone on: 0626467714.",
            "closing" => "Kind regards, and speak soon",
            "signature" => "Carine<br>Chicahondenschool.nl",
            "altBody" => implode("\n\n", [
                "Hey, nice that you reached out to me.",
                "I will contact you as soon as possible, but if you want you can also reach me by WhatsApp or phone on: 0626467714.",
                "Kind regards, and speak soon",
                "Carine",
                "Chicahondenschool.nl",
            ]),
        ];
    }

    return [
        "subject" => "Bedankt voor je aanvraag",
        "greeting" => "Hey, leuk dat je mij benaderd hebt.",
        "message" =>
            "Ik zal zo spoedig mogelijk contact met je opnemen, maar als je wilt kan je me ook via WhatsApp of telefoon bereiken op nummer: 0626467714.",
        "closing" => "Groeten, en tot snel",
        "signature" => "Carine<br>Chicahondenschool.nl",
        "altBody" => implode("\n\n", [
            "Hey, leuk dat je mij benaderd hebt.",
            "Ik zal zo spoedig mogelijk contact met je opnemen, maar als je wilt kan je me ook via WhatsApp of telefoon bereiken op nummer: 0626467714.",
            "Groeten, en tot snel",
            "Carine",
            "Chicahondenschool.nl",
        ]),
    ];
}

function confirmation_html(
    string $recipientName,
    string $logoUrl,
    array $copy,
): string {
    $escape = static fn(string $value): string => htmlspecialchars(
        $value,
        ENT_QUOTES | ENT_SUBSTITUTE,
        "UTF-8",
    );
    $intro = $copy["greeting"];
    if ($recipientName !== "") {
        $intro = $escape($recipientName) . ",<br><br>" . $escape($intro);
    } else {
        $intro = $escape($intro);
    }

    return sprintf(
        '<div style="margin:0;padding:24px;background-color:#f7f4ef;font-family:Arial,sans-serif;color:#2b2a33;">
            <div style="max-width:640px;margin:0 auto;background-color:#ffffff;border:1px solid #e8e1d8;border-radius:16px;padding:32px 28px;">
                <div style="text-align:center;margin-bottom:28px;">
                    <img src="%s" alt="ChiCa Hondenschool" style="max-width:220px;width:100%%;height:auto;display:inline-block;">
                </div>
                <p style="margin:0 0 18px;font-size:18px;line-height:1.6;">%s</p>
                <p style="margin:0 0 18px;font-size:16px;line-height:1.7;">%s</p>
                <p style="margin:0;font-size:16px;line-height:1.7;">%s</p>
            </div>
        </div>',
        $escape($logoUrl),
        $intro,
        $escape($copy["message"]),
        $escape($copy["closing"]) . "<br><br>" . $copy["signature"],
    );
}

/**
 * @return array{0: bool, 1: int, 2: int}
 */
function check_and_store_rate_limit(string $ip): array
{
    $directory =
        sys_get_temp_dir() . DIRECTORY_SEPARATOR . "chica_contact_rate_limits";
    if (
        !is_dir($directory) &&
        !mkdir($directory, 0775, true) &&
        !is_dir($directory)
    ) {
        return [false, 0, 0];
    }

    $filePath =
        $directory . DIRECTORY_SEPARATOR . hash("sha256", $ip) . ".json";
    $handle = fopen($filePath, "c+");
    if ($handle === false) {
        return [false, 0, 0];
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return [false, 0, 0];
        }

        $raw = stream_get_contents($handle);
        $data = is_string($raw) && $raw !== "" ? json_decode($raw, true) : [];
        $timestamps = [];

        if (
            is_array($data) &&
            isset($data["timestamps"]) &&
            is_array($data["timestamps"])
        ) {
            foreach ($data["timestamps"] as $timestamp) {
                if (is_int($timestamp) || ctype_digit((string) $timestamp)) {
                    $timestamps[] = (int) $timestamp;
                }
            }
        }

        $now = time();
        $timestamps = array_values(
            array_filter(
                $timestamps,
                static fn(int $timestamp): bool => $timestamp > $now - 86400,
            ),
        );

        $lastTenMinutes = array_values(
            array_filter(
                $timestamps,
                static fn(int $timestamp): bool => $timestamp > $now - 600,
            ),
        );

        if (
            count($lastTenMinutes) >= MAX_SUBMISSIONS_PER_TEN_MINUTES ||
            count($timestamps) >= MAX_SUBMISSIONS_PER_DAY
        ) {
            return [false, count($lastTenMinutes), count($timestamps)];
        }

        $timestamps[] = $now;

        rewind($handle);
        ftruncate($handle, 0);
        $encoded = json_encode(["timestamps" => $timestamps]);
        if ($encoded === false) {
            return [false, 0, 0];
        }

        fwrite($handle, $encoded);
        fflush($handle);

        return [true, count($lastTenMinutes) + 1, count($timestamps)];
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

/**
 * @return array{success: bool, reason: string}
 */
function verify_turnstile(
    string $secret,
    string $responseToken,
    string $ip,
): array {
    if ($responseToken === "") {
        return ["success" => false, "reason" => "turnstile_missing"];
    }

    $payload = http_build_query([
        "secret" => $secret,
        "response" => $responseToken,
        "remoteip" => $ip,
    ]);

    $rawResponse = false;

    if (function_exists("curl_init")) {
        $handle = curl_init(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        );

        if ($handle !== false) {
            curl_setopt_array($handle, [
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $payload,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 10,
                CURLOPT_CONNECTTIMEOUT => 5,
                CURLOPT_HTTPHEADER => [
                    "Content-Type: application/x-www-form-urlencoded",
                ],
            ]);

            $rawResponse = curl_exec($handle);
            curl_close($handle);
        }
    }

    if ($rawResponse === false) {
        $context = stream_context_create([
            "http" => [
                "method" => "POST",
                "header" => implode("\r\n", [
                    "Content-Type: application/x-www-form-urlencoded",
                    "Content-Length: " . strlen($payload),
                ]),
                "content" => $payload,
                "timeout" => 10,
                "ignore_errors" => true,
            ],
        ]);

        $rawResponse = @file_get_contents(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            false,
            $context,
        );
    }

    if (!is_string($rawResponse) || $rawResponse === "") {
        return ["success" => false, "reason" => "turnstile_unavailable"];
    }

    $decoded = json_decode($rawResponse, true);
    if (!is_array($decoded)) {
        return ["success" => false, "reason" => "turnstile_unavailable"];
    }

    return [
        "success" => ($decoded["success"] ?? false) === true,
        "reason" =>
            ($decoded["success"] ?? false) === true ? "" : "turnstile_invalid",
    ];
}

if (($_SERVER["REQUEST_METHOD"] ?? "GET") !== "POST") {
    http_response_code(405);
    header("Allow: POST");
    respond_json(405, "Method not allowed.");
}

$contentType = strtolower(trim((string) ($_SERVER["CONTENT_TYPE"] ?? "")));
if (
    $contentType === "" ||
    (!str_starts_with($contentType, "application/x-www-form-urlencoded") &&
        !str_starts_with($contentType, "multipart/form-data"))
) {
    log_blocked_attempt("content_type_invalid", client_ip());
    respond_failure(
        415,
        "content_type_invalid",
        "Invalid submission format.",
        normalize_return_to((string) ($_POST["return_to"] ?? "/contact/")),
    );
}

start_contact_session();

$returnTo = normalize_return_to((string) ($_POST["return_to"] ?? "/contact/"));
$ip = client_ip();

$name = sanitize_inline_field((string) ($_POST["name"] ?? ""));
$city = sanitize_inline_field((string) ($_POST["city"] ?? ""));
$phone = sanitize_inline_field((string) ($_POST["phone"] ?? ""));
$email = sanitize_email_field((string) ($_POST["email"] ?? ""));
$interest = sanitize_inline_field((string) ($_POST["interest"] ?? ""));
$message = sanitize_message_field((string) ($_POST["message"] ?? ""));
$informationConsent =
    trim((string) ($_POST["information_consent"] ?? "")) === "yes" ? "yes" : "";
$honeypot = sanitize_inline_field((string) ($_POST["company"] ?? ""));
$turnstileResponse = trim((string) ($_POST["cf-turnstile-response"] ?? ""));
$formToken = trim((string) ($_POST["form_token"] ?? ""));
$formStartedAtRaw = trim((string) ($_POST["form_started_at"] ?? ""));

$redirectValues = [
    "name" => $name,
    "city" => $city,
    "phone" => $phone,
    "email" => $email,
    "interest" => $interest,
    "message" => $message,
];
if ($informationConsent === "yes") {
    $redirectValues["information_consent"] = "yes";
}

if ($honeypot !== "") {
    log_blocked_attempt("honeypot_hit", $ip);
    respond_failure(
        400,
        "spam_detected",
        "Invalid submission.",
        $returnTo,
        $redirectValues,
    );
}

if ($formStartedAtRaw === "" || !ctype_digit($formStartedAtRaw)) {
    log_blocked_attempt("timing_invalid", $ip);
    respond_failure(
        400,
        "timing_invalid",
        "Form session expired.",
        $returnTo,
        $redirectValues,
    );
}

$formStartedAt = (int) $formStartedAtRaw;
$now = time();
if (
    $formStartedAt > $now + 60 ||
    $now - $formStartedAt < MINIMUM_FILL_SECONDS ||
    $now - $formStartedAt > MAXIMUM_FILL_SECONDS
) {
    log_blocked_attempt("timing_invalid", $ip);
    respond_failure(
        400,
        "timing_invalid",
        "Form session expired.",
        $returnTo,
        $redirectValues,
    );
}

$sessionToken = trim((string) ($_SESSION["contact_form_token"] ?? ""));

if ($formToken === "" || $sessionToken === "") {
    log_blocked_attempt("token_missing", $ip);
    respond_failure(
        400,
        "token_missing",
        "Form session expired.",
        $returnTo,
        $redirectValues,
    );
}

if (!hash_equals($sessionToken, $formToken)) {
    log_blocked_attempt("token_invalid", $ip);
    respond_failure(
        400,
        "token_invalid",
        "Form session expired.",
        $returnTo,
        $redirectValues,
    );
}

unset(
    $_SESSION["contact_form_token"],
    $_SESSION["contact_form_token_issued_at"],
);

if (
    $name === "" ||
    $city === "" ||
    $phone === "" ||
    $email === "" ||
    $interest === "" ||
    $message === ""
) {
    respond_failure(
        400,
        "required_invalid",
        "Please fill in all required fields.",
        $returnTo,
        $redirectValues,
    );
}

if ($informationConsent !== "yes") {
    respond_failure(
        400,
        "consent_missing",
        "Consent is required.",
        $returnTo,
        $redirectValues,
    );
}

if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    respond_failure(
        400,
        "name_invalid",
        "Please enter a valid name.",
        $returnTo,
        $redirectValues,
    );
}

if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond_failure(
        400,
        "email_invalid",
        "Please enter a valid email address.",
        $returnTo,
        $redirectValues,
    );
}

if (
    mb_strlen($city) > 120 ||
    mb_strlen($phone) > 50 ||
    mb_strlen($interest) > 200
) {
    respond_failure(
        400,
        "field_quality_invalid",
        "Please check the entered details.",
        $returnTo,
        $redirectValues,
    );
}

if (mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    respond_failure(
        400,
        "message_invalid",
        "Please enter a message between 10 and 5000 characters.",
        $returnTo,
        $redirectValues,
    );
}

[$rateLimitAllowed] = check_and_store_rate_limit($ip);
if (!$rateLimitAllowed) {
    log_blocked_attempt("rate_limit_hit", $ip);
    respond_failure(
        429,
        "rate_limited",
        "Too many submissions. Please try again later.",
        $returnTo,
        $redirectValues,
    );
}

$autoloadPath = __DIR__ . "/../vendor/autoload.php";
$secretsPath = __DIR__ . "/../secrets.php";

if (!is_file($autoloadPath) || !is_file($secretsPath)) {
    respond_failure(
        500,
        "mail_unavailable",
        "Mail service is not configured.",
        $returnTo,
        $redirectValues,
    );
}

require $autoloadPath;
$secrets = require $secretsPath;

if (!is_array($secrets)) {
    $secrets = [];
}

$smtpHost = secret_value($secrets, "smtp_host");
$smtpPort = (int) secret_value($secrets, "smtp_port");
$smtpUsername = secret_value($secrets, "smtp_username");
$smtpPassword = secret_value($secrets, "smtp_password");
$smtpSecure = secret_value($secrets, "smtp_secure");
$mailTo = secret_value($secrets, "mail_to");
$turnstileSiteKey = first_secret_value($secrets, [
    "CLOUDFLARE_TURNSTILE_SITE_KEY",
    "cloudflare_turnstile_site_key",
]);
$turnstileSecretKey = first_secret_value($secrets, [
    "CLOUDFLARE_TURNSTILE_SECRET_KEY",
    "cloudflare_turnstile_secret_key",
]);

if (
    $smtpHost === "" ||
    $smtpPort <= 0 ||
    $smtpUsername === "" ||
    $smtpPassword === "" ||
    $smtpSecure === "" ||
    $mailTo === ""
) {
    respond_failure(
        500,
        "mail_unavailable",
        "Mail service is incomplete.",
        $returnTo,
        $redirectValues,
    );
}

if ($turnstileSiteKey === "" || $turnstileSecretKey === "") {
    log_blocked_attempt("turnstile_unavailable", $ip);
    respond_failure(
        500,
        "turnstile_unavailable",
        "Security verification unavailable.",
        $returnTo,
        $redirectValues,
    );
}

$turnstileCheck = verify_turnstile(
    $turnstileSecretKey,
    $turnstileResponse,
    $ip,
);
if (!$turnstileCheck["success"]) {
    log_blocked_attempt($turnstileCheck["reason"], $ip);
    $reason =
        $turnstileCheck["reason"] === "turnstile_unavailable"
            ? "turnstile_unavailable"
            : ($turnstileResponse === ""
                ? "turnstile_missing"
                : "turnstile_invalid");
    $message =
        $reason === "turnstile_unavailable"
            ? "Security verification unavailable."
            : "Please confirm that you are not a robot.";
    $status = $reason === "turnstile_unavailable" ? 500 : 400;

    respond_failure($status, $reason, $message, $returnTo, $redirectValues);
}

$escape = static fn(string $value): string => htmlspecialchars(
    $value,
    ENT_QUOTES | ENT_SUBSTITUTE,
    "UTF-8",
);

$body = sprintf(
    '<h1>Contact form submission</h1>
    <p><strong>Name:</strong> %s</p>
    <p><strong>Email:</strong> %s</p>
    <p><strong>City:</strong> %s</p>
    <p><strong>Phone:</strong> %s</p>
    <p><strong>Interest:</strong> %s</p>
    <p><strong>Agree to receive information:</strong> %s</p>
    <p><strong>Message:</strong></p>
    <p>%s</p>',
    $escape($name),
    $escape($email),
    $escape($city),
    $escape($phone),
    $escape($interest),
    $escape("Yes"),
    nl2br($escape($message)),
);
$lang = submitted_lang($returnTo);
$confirmationCopy = confirmation_copy($lang);
$logoUrl =
    "https://www.chicahondenschool.nl/images/logo-chica-hondenschool.jpg";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Port = $smtpPort;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->CharSet = "UTF-8";
    $mail->isHTML(true);

    $mail->setFrom($smtpUsername);
    $mail->addAddress($mailTo);
    $mail->addReplyTo($email, $name);
    $mail->Subject = "Contact form submission";
    $mail->Body = $body;
    $mail->AltBody = implode("\n", [
        "Contact form submission",
        "",
        "Name: " . $name,
        "Email: " . $email,
        "City: " . $city,
        "Phone: " . $phone,
        "Interest: " . $interest,
        "Agree to receive information: Yes",
        "",
        "Message:",
        $message,
    ]);

    $mail->send();
    $mail->clearAllRecipients();
    $mail->clearReplyTos();
    $mail->Subject = $confirmationCopy["subject"];
    $mail->Body = confirmation_html($name, $logoUrl, $confirmationCopy);
    $mail->AltBody = $confirmationCopy["altBody"];
    $mail->addAddress($email, $name);
    $mail->send();
    respond_success($returnTo);
} catch (Exception $exception) {
    respond_failure(
        500,
        "mail_send_failed",
        "Sending failed.",
        $returnTo,
        $redirectValues,
    );
}
