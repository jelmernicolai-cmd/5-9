export const metadata = { title: "Prijzen" };

export default function Page() {
  return (
    <section className="container py-12 prose">
      <h1>Prijzen</h1>
      <p>Eenvoudig licentiemodel:</p>
      <ul>
        <li><strong>Starter</strong> — €499/maand</li>
        <li><strong>Pro</strong> — €1.499/maand</li>
        <li><strong>Enterprise</strong> — op aanvraag</li>
      </ul>
      <p>Facturatie via factuur of Stripe. Neem contact op voor maatwerk.</p>
    </section>
  );
}
