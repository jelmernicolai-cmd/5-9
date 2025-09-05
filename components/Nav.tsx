'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, LayoutDashboard } from "lucide-react";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm hover:bg-gray-100 ${active ? "font-semibold" : ""}`}
    >
      {label}
    </Link>
  );
};

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="container flex h-14 items-center gap-2">
        <Link href="/" className="text-base font-bold">PharmaGtN</Link>
        <nav className="hidden md:flex items-center gap-1 ml-4">
          <NavLink href="/features" label="Features" />
          <NavLink href="/pricing" label="Prijzen" />
          <NavLink href="/templates" label="Templates" />
          <NavLink href="/about" label="Over ons" />
          <NavLink href="/contact" label="Contact" />
        </nav>
        <div className="md:hidden ml-2">
          {/* Simple overflow menu for mobile */}
          <details className="relative">
            <summary className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">Menu</summary>
            <div className="absolute w-48 mt-2 right-0 bg-white border rounded-xl shadow-lg p-2 space-y-1">
              <NavLink href="/features" label="Features" />
              <NavLink href="/pricing" label="Prijzen" />
              <NavLink href="/templates" label="Templates" />
              <NavLink href="/about" label="Over ons" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </details>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/portal" className="btn btn-outline">
            <LayoutDashboard className="size-4 mr-2" />
            Portal
          </Link>
          <Link href="/login" className="btn btn-primary">
            <LogIn className="size-4 mr-2" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
