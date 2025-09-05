import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Datagedreven <span className="text-sky-700">Gross‑to‑Net</span> voor farma
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Verhoog je netto marge met up‑to‑date inzichten in kortingen, contracten, paralleldruk en kanaalconsistentie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="btn btn-primary">Koop licentie</Link>
              <Link href="/contact" className="btn btn-outline">Plan demo</Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Gemiddeld ROI‑doel: €100.000+ per jaar.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="font-semibold">Waterfall</p>
              <p className="text-sm text-gray-600">Visualiseer GtN‑componenten van bruto naar netto.</p>
            </div>
            <div className="card p-4">
              <p className="font-semibold">Consistentie</p>
              <p className="text-sm text-gray-600">Detecteer outliers per kanaal en klantgroep.</p>
            </div>
            <div className="card p-4">
              <p className="font-semibold">Paralleldruk</p>
              <p className="text-sm text-gray-600">Heatmap voor druk en arbitrage‑risico.</p>
            </div>
            <div className="card p-4">
              <p className="font-semibold">KPI Tiles</p>
              <p className="text-sm text-gray-600">Overzicht sleutel‑KPI’s en trend.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
