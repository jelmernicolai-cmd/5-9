import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "VALIDATION_ERROR" }, { status: 400 });
    }

    // In productie: stuur door via je e-mailprovider of webhook (bv. Resend/Sendgrid/Slack).
    console.log("[CONTACT] %s <%s>: %s", name, email, message.slice(0, 1000));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_ERROR", err);
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
