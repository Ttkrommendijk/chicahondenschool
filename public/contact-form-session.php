<?php

declare(strict_types=1);

/**
 * @param array<string, mixed> $source
 */
function secret_value(array $source, string $key): string
{
    $value = $source[$key] ?? null;

    return is_scalar($value) ? trim((string) $value) : "";
}

header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

if (($_SERVER["REQUEST_METHOD"] ?? "GET") !== "GET") {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
    exit();
}

session_set_cookie_params([
    "httponly" => true,
    "samesite" => "Lax",
    "secure" => !empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off",
]);
session_start();

$secretsPath = __DIR__ . "/../secrets.php";
$secrets = is_file($secretsPath) ? require $secretsPath : [];
if (!is_array($secrets)) {
    $secrets = [];
}

$turnstileSiteKey = secret_value($secrets, "CLOUDFLARE_TURNSTILE_SITE_KEY");
if ($turnstileSiteKey === "") {
    $turnstileSiteKey = secret_value($secrets, "cloudflare_turnstile_site_key");
}

if ($turnstileSiteKey === "") {
    http_response_code(500);
    echo json_encode(["message" => "Security verification unavailable."]);
    exit();
}

try {
    $token = bin2hex(random_bytes(32));
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode(["message" => "Token generation failed."]);
    exit();
}

$_SESSION["contact_form_token"] = $token;
$_SESSION["contact_form_token_issued_at"] = time();

echo json_encode([
    "token" => $token,
    "turnstileSiteKey" => $turnstileSiteKey,
]);
