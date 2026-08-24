import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRightGlyph,
  CheckGlyph,
  ConnectIcon,
  CopyGlyph,
  ExternalGlyph,
  ModeIcon,
} from "@/components/icons";
import {
  connectCards,
  gameModes,
  stats,
  DISCORD_URL,
  SERVER_IP,
  STORE_URL,
} from "@/lib/data";

const accent: Record<string, string> = {
  survival: "var(--color-survival)",
  lifesteal: "var(--color-lifesteal)",
  earth: "var(--color-earth)",
  minigames: "var(--color-minigames)",
  community: "var(--color-community)",
  cobblemon: "var(--color-cobblemon)",
  skyblock: "var(--color-skyblock)",
};

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Aurora />

        <div className="container-page relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] font-medium text-fg-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            7 game modes · Java &amp; Bedrock
          </span>

          <Image
            src="/logo.png"
            alt="Paragon Network"
            width={96}
            height={96}
            priority
            className="mt-9 h-20 w-20 object-contain sm:h-24 sm:w-24"
          />

          <h1 className="mt-7 font-display text-[clamp(2.75rem,9vw,5.25rem)] leading-[0.95] font-black tracking-[0.01em] text-fg">
            PARAGON
            <span className="mt-2 block text-[0.3em] font-bold tracking-[0.42em] text-brand-bright">
              NETWORK
            </span>
          </h1>

          <p className="lede mt-7 max-w-lg text-balance sm:text-[17px]">
            One network, endless adventures. Seven curated game modes, an active community and a staff
            team that keeps the servers running around the clock.
          </p>

          {/* Server IP */}
          <div className="mt-10 w-full max-w-md">
            <CopyButton
              text={SERVER_IP}
              className="group flex w-full items-center gap-3 rounded-xl border border-line-strong bg-surface/80 p-2 pl-5 backdrop-blur-sm transition-all duration-200 hover:border-brand/60 hover:bg-surface-2"
            >
              <span className="min-w-0 flex-1 truncate text-left font-mono text-[15px] font-medium text-fg">
                {SERVER_IP}
              </span>
              <span className="btn btn-primary shrink-0 px-4 py-2.5 text-[13px]">
                <CopyGlyph size={15} />
                Copy IP
              </span>
            </CopyButton>
            <p className="mt-2.5 text-xs text-fg-subtle">Click to copy · works on Java and Bedrock</p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href={DISCORD_URL} target="_blank" rel="noopener" className="btn btn-secondary">
              Join our Discord
              <ExternalGlyph size={15} />
            </a>
            <Link href="/#modes" className="btn btn-ghost">
              Explore game modes
              <ArrowRightGlyph size={15} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="container-page relative mt-20">
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse items-center bg-surface px-5 py-7 text-center"
                >
                  <dt className="mt-1.5 text-xs tracking-wide text-fg-subtle">{stat.label}</dt>
                  <dd className="text-xl font-bold tracking-tight text-fg sm:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------------- GAME MODES ---------------- */}
      <section id="modes" className="section scroll-mt-20 border-t border-line">
        <div className="container-page">
          <SectionHeading
            eyebrow="Seven worlds, one network"
            title="Choose your adventure"
            subtitle="Every mode runs on its own tuned server with dedicated staff, regular updates and progression that actually means something."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gameModes.map((mode, i) => (
              <Reveal key={mode.key} delayMs={(i % 3) * 70}>
                <article
                  className="card card-hover group relative h-full overflow-hidden p-6"
                  style={{ "--accent": accent[mode.key] } as CSSProperties}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--accent) 50%, transparent)",
                    }}
                  />

                  <div className="flex items-center gap-3.5">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: "color-mix(in srgb, var(--accent) 14%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      <ModeIcon mode={mode.key} size={19} />
                    </span>
                    <h3 className="text-[17px] font-bold tracking-tight text-fg">{mode.name}</h3>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{mode.blurb}</p>

                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {mode.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] text-fg-muted">
                        <span className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }}>
                          <CheckGlyph size={13} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PARTNERSHIPS ---------------- */}
      <section id="partners" className="section border-t border-line">
        <div className="container-page">
          <div className="card overflow-hidden">
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="eyebrow">Grow together</p>
                <h2 className="h-section mt-3">Partner with Paragon</h2>
                <p className="lede mt-4 max-w-xl">
                  Run a server or community that could use more reach? Our partnerships program plugs you
                  directly into the Paragon hub — cross-promotion with our player base, and a featured spot
                  in front of our community.
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                  {["Cross-promotion", "Featured listing", "Direct staff contact"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13.5px] text-fg-muted">
                      <span className="text-brand-bright">
                        <CheckGlyph size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={DISCORD_URL} target="_blank" rel="noopener" className="btn btn-primary">
                    Apply on Discord
                    <ExternalGlyph size={15} />
                  </a>
                  <Link href="/partners" className="btn btn-secondary">
                    See our partners
                  </Link>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="relative hidden aspect-square items-center justify-center lg:flex"
              >
                <div
                  className="absolute inset-6 rounded-full opacity-30 blur-3xl"
                  style={{ background: "radial-gradient(circle, var(--color-brand), transparent 70%)" }}
                />
                <div className="absolute inset-4 rounded-full border border-line" />
                <div className="absolute inset-12 rounded-full border border-line" />
                <Image
                  src="/logo.png"
                  alt=""
                  width={104}
                  height={104}
                  className="relative h-24 w-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONNECT ---------------- */}
      <section id="connect" className="section scroll-mt-20 border-t border-line">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get started"
            title="Connect with us"
            subtitle="Everything you need to jump in — the server address, our Discord, the store and more."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {connectCards.map((card, i) => {
              const body = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand-bright transition-colors duration-300 group-hover:bg-brand/20">
                      <ConnectIcon name={card.icon} size={18} />
                    </span>
                    <span className="text-fg-subtle transition-all duration-300 group-hover:text-brand-bright">
                      {card.copy ? <CopyGlyph size={16} /> : <ExternalGlyph size={16} />}
                    </span>
                  </div>

                  <p className="mt-5 text-[13px] font-semibold tracking-wide text-fg-subtle uppercase">
                    {card.label}
                  </p>
                  <p className="mt-1.5 truncate font-mono text-[14px] text-fg">{card.value}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const cls = "card card-hover group block h-full w-full p-6 text-left";

              return (
                <Reveal key={card.label} delayMs={(i % 3) * 70} className="h-full">
                  {card.copy ? (
                    <CopyButton text={card.copy} className={cls}>
                      {body}
                    </CopyButton>
                  ) : card.internal ? (
                    <Link href={card.href ?? "#"} className={cls}>
                      {body}
                    </Link>
                  ) : (
                    <a href={card.href} target="_blank" rel="noopener" className={cls}>
                      {body}
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="border-t border-line">
        <div className="container-page py-20 sm:py-24">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
              <div
                aria-hidden="true"
                className="absolute -top-1/2 left-1/2 -z-10 h-[400px] w-[700px] max-w-[150vw] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
                style={{ background: "radial-gradient(circle, var(--color-brand), transparent 70%)" }}
              />
              <h2 className="h-section">Ready to play?</h2>
              <p className="lede mx-auto mt-4 max-w-md">
                Add the server, hop in Discord and pick your world. See you in game.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CopyButton text={SERVER_IP} className="btn btn-primary">
                  <CopyGlyph size={15} />
                  Copy {SERVER_IP}
                </CopyButton>
                <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-secondary">
                  Visit the store
                  <ExternalGlyph size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
