"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/lib/site-data";
import { CloseIcon, MenuIcon } from "./icons";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/80 bg-overlay backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-6">
          <Link
            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            onClick={closeMenu}
            href="/"
          >
            Thorz Digital
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                onClick={closeMenu}
                className="transition-colors hover:text-primary"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              className="button-primary !px-5 !py-2.5 !text-sm"
              onClick={closeMenu}
              href="/contact"
            >
              Konsultasi Gratis
            </Link>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-white text-foreground shadow-[0_10px_24px_-20px_rgba(11,28,48,0.48)] transition hover:border-primary/25 hover:text-primary md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <>
          <button
            aria-label="Tutup menu"
            className="fixed inset-0 z-[55] bg-[#0b1c30]/22 backdrop-blur-[2px] md:hidden"
            onClick={closeMenu}
            type="button"
          />

          <div
            className="fixed inset-x-4 top-[5.6rem] z-[60] rounded-[1.4rem] border border-card-border/90 bg-white/98 p-4 shadow-[0_28px_60px_-30px_rgba(11,28,48,0.45)] md:hidden"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-surface-muted hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                className="button-primary mt-2"
                onClick={closeMenu}
                href="/contact"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
