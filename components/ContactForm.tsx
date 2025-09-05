'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<null | 'OK' | 'ERR'>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: fd });
    if (res.ok) setStatus('OK'); else setStatus('ERR');
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <input required name="name" placeholder="Naam" className="rounded-lg border px-3 py-2" />
      <input required type="email" name="email" placeholder="E‑mail" className="rounded-lg border px-3 py-2" />
      <textarea required name="message" placeholder="Bericht" rows={5} className="rounded-lg border px-3 py-2" />
      <button className="btn btn-primary w-fit" type="submit">Verstuur</button>
      {status === 'OK' && <p className="text-green-600 text-sm">Bedankt! We nemen snel contact op.</p>}
      {status === 'ERR' && <p className="text-red-600 text-sm">Er ging iets mis. Mail ons a.u.b. direct.</p>}
    </form>
  );
}
