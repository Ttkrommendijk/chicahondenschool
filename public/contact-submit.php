<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

$autoloadPath = __DIR__ . '/../vendor/autoload.php';
$secretsPath = __DIR__ . '/../secrets.php';

if (!is_file($autoloadPath) || !is_file($secretsPath)) {
    http_response_code(500);
    echo json_encode(['message' => 'Mail service is not configured.']);
    exit;
}

require $autoloadPath;
$secrets = require $secretsPath;

if (!is_array($secrets)) {
    $secrets = [];
}

/**
 * @param array<string, mixed> $source
 */
function secret_value(array $source, string $key): string
{
    $value = $source[$key] ?? null;

    return is_scalar($value) ? trim((string) $value) : '';
}

$smtpHost = secret_value($secrets, 'smtp_host');
$smtpPort = (int) secret_value($secrets, 'smtp_port');
$smtpUsername = secret_value($secrets, 'smtp_username');
$smtpPassword = secret_value($secrets, 'smtp_password');
$smtpSecure = secret_value($secrets, 'smtp_secure');
$mailTo = secret_value($secrets, 'mail_to');

if (
    $smtpHost === '' ||
    $smtpPort <= 0 ||
    $smtpUsername === '' ||
    $smtpPassword === '' ||
    $smtpSecure === '' ||
    $mailTo === ''
) {
    http_response_code(500);
    echo json_encode(['message' => 'Mail service is incomplete.']);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$city = trim((string) ($_POST['city'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$interest = trim((string) ($_POST['interest'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Please fill in the required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Please enter a valid email address.']);
    exit;
}

$escape = static fn (string $value): string => htmlspecialchars(
    $value,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);

$body = sprintf(
    '<h1>Contact form submission</h1>
    <p><strong>Name:</strong> %s</p>
    <p><strong>Email:</strong> %s</p>
    <p><strong>City:</strong> %s</p>
    <p><strong>Phone:</strong> %s</p>
    <p><strong>Interest:</strong> %s</p>
    <p><strong>Message:</strong></p>
    <p>%s</p>',
    $escape($name),
    $escape($email),
    $escape($city),
    $escape($phone),
    $escape($interest),
    nl2br($escape($message))
);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Port = $smtpPort;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    $mail->setFrom($smtpUsername);
    $mail->addAddress($mailTo);
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Contact form submission';
    $mail->Body = $body;
    $mail->AltBody = implode("\n", [
        'Contact form submission',
        '',
        'Name: ' . $name,
        'Email: ' . $email,
        'City: ' . $city,
        'Phone: ' . $phone,
        'Interest: ' . $interest,
        '',
        'Message:',
        $message,
    ]);

    $mail->send();

    echo json_encode(['message' => 'OK']);
} catch (Exception $exception) {
    http_response_code(500);
    echo json_encode(['message' => 'Sending failed.']);
}
