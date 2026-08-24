import type { Metadata } from "next";
import Image from "next/image";
import { CopyButton } from "@/components/CopyButton";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partners — Paragon Network",
  description: "Servers and communities partnered with Paragon Network.",
};

export default function PartnersPage() {
  return (
    <>
      <section
        className="py-40 pb-[60px] text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(155,93,229,0.14), transparent 60%), linear-gradient(180deg, var(--color-void-deep), var(--color-void) 70%)",
        }}
      >
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="eyebrow mb-3.5">THE PARAGON ALLIANCE</p>
          <h1 className="mb-3.5 font-display text-[clamp(32px,5vw,52px)] text-text">Our Partners</h1>
          <p className="mx-auto max-w-[56ch] text-[15.5px] leading-[1.7] text-text-muted">
            The servers and communities we work alongside — cross-promoted to our player base and featured right
            here on the hub.
          </p>
        </div>
      </section>

      <section className="py-5 pb-[120px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px]">
            {partners.map((partner) => (
              <article key={partner.name} className="partner-card">
                <div className="relative aspect-[21/9] w-full">
                  <Image src={partner.banner} alt={partner.name} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3.5 px-6 pt-[22px] pb-[26px]">
                  <div>
                    <h3 className="mb-1 font-display text-[18px] text-text">{partner.name}</h3>
                    <p className="m-0 text-[12.5px] text-text-faint">{partner.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {partner.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CopyButton
                    text={partner.ip}
                    className="flex w-full items-center justify-between gap-2.5 rounded-[10px] border border-panel-line bg-black/25 px-3.5 py-2.5 font-mono text-[13px] text-text hover:border-paragon-glow"
                  >
                    <span>{partner.ip}</span>
                    <span aria-hidden="true" className="text-text-faint">⧉</span>
                  </CopyButton>
                  <div className="mt-auto flex gap-2.5 pt-1">
                    <a href={partner.discordHref} target="_blank" rel="noopener" className="partner-btn">
                      Discord
                    </a>
                    <a
                      href={partner.visitHref}
                      target="_blank"
                      rel="noopener"
                      className="partner-btn partner-btn-primary"
                    >
                      Visit Server
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <div
              aria-hidden="true"
              className="flex min-h-[260px] flex-col items-center justify-center gap-2.5 rounded-[14px] border border-dashed border-panel-line px-6 py-10 text-center text-text-faint"
            >
              <span className="font-display text-[28px] text-text-faint">+</span>
              <p className="m-0 max-w-[22ch] text-[13px]">More partner servers featured here soon</p>
            </div>
          </div>

          <div className="mt-[60px] rounded-[20px] border border-panel-line bg-linear-[160deg] from-panel to-[rgba(19,16,19,0.4)] px-10 py-10 text-center">
            <h3 className="mb-2.5 font-display text-[22px] text-text">Want to see your server here?</h3>
            <p className="mb-[22px] text-sm text-text-muted">
              Apply to partner with Paragon Network and get featured on this page.
            </p>
            <a href="https://discord.gg/nmYHvnCa4T" target="_blank" rel="noopener" className="btn btn-primary">
              Apply on Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
