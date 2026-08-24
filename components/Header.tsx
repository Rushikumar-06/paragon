"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#modes", label: "Game Modes" },
  { href: "/partners", label: "Partners" },
  { href: "/services", label: "Services" },
  { href: "/vote", label: "Vote" },
  { href: "/#connect", label: "Connect" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-panel-line bg-void/75 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[68px] max-w-[1140px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-sm font-bold tracking-[0.08em]">
          <Image
            src="/logo.png"
            alt="Paragon Network"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain drop-shadow-[0_0_8px_rgba(155,93,229,0.5)]"
          />
          <span>PARAGON</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-7 text-sm font-semibold text-text-muted max-[640px]:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-text ${
                pathname === link.href ? "text-paragon-glow" : ""
              } max-[640px]:hidden`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://paragon-network-shop.tebex.io"
            target="_blank"
            rel="noopener"
            className="rounded-full border border-community px-4 py-2 text-community hover:bg-community hover:text-void-deep"
          >
            Visit Store
          </a>
        </nav>
      </div>
    </header>
  );
}
