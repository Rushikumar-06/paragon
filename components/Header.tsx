"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseGlyph, MenuGlyph } from "@/components/icons";
import { navLinks, STORE_URL } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        scrolled || menuOpen
          ? "border-b border-line bg-base/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-display text-[15px] font-bold tracking-[0.14em] text-fg">PARAGON</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  active ? "text-brand-bright" : "text-fg-muted hover:bg-white/[0.05] hover:text-fg"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-ghost px-3 py-2">
            Store
          </a>
          <Link href="/#connect" className="btn btn-primary px-4 py-2.5">
            Play Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="-mr-2 grid h-10 w-10 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg md:hidden"
        >
          {menuOpen ? <CloseGlyph size={22} /> : <MenuGlyph size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="animate-slide-down border-t border-line bg-base/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-brand/10 text-brand-bright"
                    : "text-fg-muted hover:bg-white/[0.05] hover:text-fg"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="btn btn-secondary w-full"
              >
                Visit Store
              </a>
              <Link href="/#connect" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">
                Play Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
