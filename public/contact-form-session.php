<?php

declare(strict_types=1);

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
]);
