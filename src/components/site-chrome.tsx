import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

import ronLogoAsset from "@/assets/ron-digital-logo.png.asset.json";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="page-grid flex min-h-20 items-center justify-between gap-5">
        <Link to="/" aria-label="Ron Digital home" className="shrink-0 leading-none">
          <img src={ronLogoAsset.url} alt="Ron Digital" className="h-14 w-auto md:h-16" />
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-ink-muted xl:flex" aria-label="Main navigation">
          {navigation.map(([label, to]) => (
            <Link key={to} to={to} className="transition-colors hover:text-brand" activeProps={{ className: "font-semibold text-brand" }}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand sm:inline-flex">
            Book a Consultation
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-border bg-background text-brand xl:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="absolute inset-x-4 top-[calc(100%-0.25rem)] grid gap-1 rounded-xl border border-border bg-background p-3 shadow-lg xl:hidden" aria-label="Mobile navigation">
            {navigation.map(([label, to]) => (
              <Link key={to} to={to} className="rounded-lg px-4 py-3 text-sm text-ink-muted hover:bg-brand-soft hover:text-brand" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link to="/contact" className="mt-1 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-background" onClick={() => setMobileOpen(false)}>
              Book a Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="navy-surface border-t border-background/10 py-12 text-background">
      <div className="page-grid grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="Ron Digital home" className="inline-block rounded-xl bg-background p-2.5">
            <img src={ronLogoAsset.url} alt="Ron Digital" className="h-14 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-muted">Practical digital solutions for businesses ready to build, connect, and grow.</p>
          <p className="mt-4 text-sm italic text-brand-glow">Creating Solutions. Building Connections.</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Menu</h3>
          <div className="mt-5 grid gap-3 text-sm text-navy-muted">
            {navigation.map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-background">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Contact</h3>
          <a href="mailto:rondigital.team@gmail.com" className="mt-5 block break-words text-sm text-navy-muted hover:text-background">
            rondigital.team@gmail.com
          </a>
          <div className="mt-5 flex gap-3">
            <a href="https://x.com/rondigitalream" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital on X" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow">
              <X className="size-4" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital LinkedIn" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow">
              <Linkedin className="size-4" />
            </a>
            <a href="mailto:rondigital.team@gmail.com" aria-label="Email Ron Digital" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow">
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="page-grid mt-10 border-t border-background/10 pt-6 text-xs text-navy-muted">© 2026 Ron Digital. All rights reserved.</div>
    </footer>
  );
}
