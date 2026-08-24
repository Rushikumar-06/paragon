import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { CopyGlyph, ExternalGlyph } from "@/components/icons";
import { partners, DISCORD_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partners",
  description: "Servers and communities partnered with Paragon Network.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="The Paragon alliance"
        title="Our partners"
        subtitle="The servers and communities we work alongside — cross-promoted to our player base and featured right here on the hub."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delayMs={(i % 3) * 70} className="h-full">
                <article className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-line">
                    <Image
                      src={partner.banner}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div>
                      <h2 className="text-[16px] font-bold tracking-tight text-fg">{partner.name}</h2>
                      <p className="mt-1 text-[13px] text-fg-subtle">{partner.tagline}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {partner.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <CopyButton
                      text={partner.ip}
                      className="flex w-full items-center gap-2.5 rounded-lg border border-line bg-black/25 px-3 py-2.5 font-mono text-[12px] text-fg-muted transition-colors hover:border-brand/50 hover:text-fg"
                    >
                      <span className="min-w-0 flex-1 truncate text-left">{partner.ip}</span>
                      <CopyGlyph size={14} className="shrink-0" />
                    </CopyButton>

                    <div className="mt-auto flex gap-2 pt-1">
                      <a
                        href={partner.discordHref}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-secondary flex-1 px-3 py-2.5 text-[13px]"
                      >
                        Discord
                      </a>
                      <a
                        href={partner.visitHref}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-primary flex-1 px-3 py-2.5 text-[13px]"
                      >
                        Visit
                        <ExternalGlyph size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delayMs={140} className="h-full">
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line p-8 text-center">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-fg-subtle">
                  +
                </span>
                <p className="max-w-[22ch] text-[13px] text-fg-subtle">
                  More partner servers featured here soon
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={120}>
            <div className="mt-14 rounded-2xl border border-line bg-surface px-6 py-12 text-center sm:px-12">
              <h2 className="h-section">Want to see your server here?</h2>
              <p className="lede mx-auto mt-4 max-w-md">
                Apply to partner with Paragon Network and get featured on this page.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener"
                className="btn btn-primary mt-8"
              >
                Apply on Discord
                <ExternalGlyph size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
