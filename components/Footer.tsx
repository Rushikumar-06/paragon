import Image from "next/image";
import Link from "next/link";
import { DISCORD_URL, SERVER_IP, STAFF_FORM_URL, STORE_URL } from "@/lib/data";

const columns = [
  {
    title: "Play",
    links: [
      { label: "Game Modes", href: "/#modes", external: false },
      { label: "Server Status", href: "/services", external: false },
      { label: "Vote for Rewards", href: "/vote", external: false },
      { label: "Store", href: STORE_URL, external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: DISCORD_URL, external: true },
      { label: "Partners", href: "/partners", external: false },
      { label: "Staff Applications", href: STAFF_FORM_URL, external: true },
      { label: "Connect", href: "/#connect", external: false },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="font-display text-[15px] font-bold tracking-[0.14em] text-fg">PARAGON</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              One network, endless adventures. Survival, Lifesteal, Earth, Cobblemon, Skyblock and more —
              on Java and Bedrock.
            </p>
            <p className="mt-5 font-mono text-[13px] text-fg-subtle">
              <span className="text-fg-muted">IP</span> {SERVER_IP}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-wide text-fg">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-fg-subtle">© {year} Paragon Network. All rights reserved.</p>
          <p className="text-[13px] text-fg-subtle">Not affiliated with Mojang or Microsoft.</p>
        </div>
      </div>
    </footer>
  );
}
