export const metadata = { title: "Features" };

export default function Page() {
  return (
    <section className="container py-12 prose">
      <h1>Features</h1>
      <ul>
        <li>Interactie‑dashboards: Waterfall, Consistentie, Paralleldruk</li>
        <li>Upload & analyseer Excel/CSV templates</li>
        <li>Portal met toegangsbeheer (NextAuth)</li>
      </ul>
    </section>
  );
}
