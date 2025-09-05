export const metadata = { title: "Templates" };

export default function Page() {
  return (
    <section className="container py-12 prose">
      <h1>Download templates</h1>
      <ul>
        <li><a href="/templates/waterfall_template.xlsx" download>Waterfall Template</a></li>
        <li><a href="/templates/consistency-template.xlsx" download>Consistentie Template</a></li>
        <li><a href="/templates/parallel-template.xlsx" download>Paralleldruk Template</a></li>
      </ul>
    </section>
  );
}
