import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ message: "Ongeldige aanvraag." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = String(payload.name ?? "").trim();
  const city = String(payload.city ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const interest = String(payload.interest ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !city || !phone || !email || !interest || !message) {
    return new Response(
      JSON.stringify({ message: "Vul alle verplichte velden in." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!isEmail(email)) {
    return new Response(
      JSON.stringify({ message: "Vul een geldig e-mailadres in." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (message.length < 10) {
    return new Response(
      JSON.stringify({ message: "Beschrijf je vraag in minimaal 10 tekens." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const smtpHost = import.meta.env.SMTP_HOST;
  const smtpPort = Number(import.meta.env.SMTP_PORT ?? "0");
  const smtpUser = import.meta.env.SMTP_USER;
  const smtpPass = import.meta.env.SMTP_PASS;
  const smtpFrom = import.meta.env.SMTP_FROM;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom) {
    return new Response(
      JSON.stringify({ message: "Email service not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const timestamp = new Date().toISOString();

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: "info@chicahondenschool.nl",
      replyTo: email,
      subject: `Nieuwe aanvraag via website - ${interest}`,
      text: [
        "Nieuwe contactaanvraag via de website",
        "",
        `Naam: ${name}`,
        `Woonplaats: ${city}`,
        `Telefoon (WhatsApp): ${phone}`,
        `E-mail: ${email}`,
        `Interesse: ${interest}`,
        "",
        "Bericht:",
        message,
        "",
        `Tijdstip: ${timestamp}`,
      ].join("\n"),
    });

    return new Response(
      JSON.stringify({ message: "Bericht succesvol verzonden." }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch {
    return new Response(
      JSON.stringify({
        message:
          "Verzenden is nu niet gelukt. Probeer het later opnieuw of neem telefonisch contact op.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
