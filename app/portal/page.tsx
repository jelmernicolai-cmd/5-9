import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";

export const metadata = { title: "Portal" };

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <section className="container py-12">
      <h1 className="text-2xl font-semibold">Welkom in de GtN Portal</h1>
      <p className="mt-2 text-gray-600">Je bent ingelogd als <strong>{session.user?.email}</strong>.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h2 className="font-semibold">Upload & Analyse</h2>
          <p className="text-sm text-gray-600">Upload CSV/XLSX volgens onze templates en bekijk inzichten.</p>
        </div>
        <div className="card p-4">
          <h2 className="font-semibold">Dashboard</h2>
          <p className="text-sm text-gray-600">Waterfall, consistentie en paralleldruk (binnenkort).</p>
        </div>
      </div>
    </section>
  );
}
