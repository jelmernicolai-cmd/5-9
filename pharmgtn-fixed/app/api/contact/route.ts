import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // In productie: stuur door via e-mail provider of webhook.
  console.log("[CONTACT] %s <%s>: %s", name, email, message.slice(0, 500));
  return NextResponse.json({ ok: true });
}
