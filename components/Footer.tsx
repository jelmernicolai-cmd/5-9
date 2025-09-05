export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:items-center">
        <p>&copy; {new Date().getFullYear()} PharmaGtN. Alle rechten voorbehouden.</p>
        <div className="sm:ml-auto flex gap-4">
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/terms">Voorwaarden</a>
        </div>
      </div>
    </footer>
  );
}
