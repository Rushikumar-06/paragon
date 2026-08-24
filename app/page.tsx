import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Starfield } from "@/components/Starfield";
import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { ModeIcon } from "@/components/icons";
import { gameModes, connectCards } from "@/lib/data";

const riftColorVar: Record<string, string> = {
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
      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-[92vh] items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(155,93,229,0.16), transparent 60%), linear-gradient(180deg, var(--color-void-deep), var(--color-void) 70%)",
        }}
      >
        <Starfield />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[10%] left-1/2 z-0 h-[900px] w-[900px] max-w-[140vw] -translate-x-1/2"
          style={{ background: "radial-gradient(circle, rgba(199,125,255,0.18), transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center px-6 pt-10 pb-[60px] text-center">
          <div className="mb-5">
            <Image
              src="/logo.png"
              alt=""
              width={128}
              height={128}
              className="h-32 w-32 animate-emblem-pulse object-contain"
            />
          </div>
          <h1 className="m-0 font-display text-[clamp(44px,9vw,92px)] leading-[0.95] tracking-[0.02em] text-text [text-shadow:0_0_40px_rgba(155,93,229,0.35)]">
            PARAGON
            <span className="mt-1.5 block text-[0.52em] tracking-[0.22em] text-paragon-glow">NETWORK</span>
          </h1>
          <p className="mt-[22px] text-[clamp(15px,2vw,19px)] font-semibold tracking-[0.08em] text-text-muted uppercase">
            One network. Endless adventures.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-7 text-[13px] font-semibold text-text-muted">
            {["Active Community", "Frequent Events", "Dedicated Staff"].map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-paragon-glow shadow-[0_0_8px_var(--color-paragon-glow)]" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/#connect" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="/#modes" className="btn btn-ghost">
              Explore Modes
            </Link>
          </div>
        </div>
        <Link
          href="/#modes"
          aria-label="Scroll to game modes"
          className="absolute bottom-7 left-1/2 z-10 h-9 w-[22px] -translate-x-1/2 rounded-[12px] border-[1.5px] border-text-faint"
        >
          <span className="absolute top-1.5 left-1/2 h-2 w-1 -translate-x-1/2 animate-scroll-cue-move rounded-sm bg-paragon-glow" />
        </Link>
      </section>

      {/* GAME MODES */}
      <section id="modes" className="relative py-[120px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="eyebrow">FIVE WORLDS, ONE NETWORK</p>
          <h2 className="section-title">Choose your adventure</h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-5">
            {gameModes.map((mode) => (
              <Reveal key={mode.key}>
                <article
                  className="mode-card h-full"
                  style={{ "--rift": riftColorVar[mode.key] } as CSSProperties}
                >
                  <div
                    className="relative z-10 mb-[18px] grid h-11 w-11 place-items-center rounded-[10px]"
                    style={{ background: `color-mix(in srgb, ${riftColorVar[mode.key]} 18%, transparent)`, color: riftColorVar[mode.key] }}
                  >
                    <ModeIcon mode={mode.key} />
                  </div>
                  <h3 className="relative z-10 mb-3.5 font-display text-[19px] text-text">{mode.name}</h3>
                  <ul className="relative z-10 flex flex-col gap-2">
                    {mode.features.map((feature) => (
                      <li key={feature} className="relative pl-4 text-[13.5px] text-text-muted">
                        <span
                          className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full"
                          style={{ background: riftColorVar[mode.key] }}
                        />
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

      {/* PARTNERSHIPS */}
      <section id="partners" className="py-10 pb-[130px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid grid-cols-[1.3fr_0.7fr] items-center gap-12 rounded-[20px] border border-panel-line bg-linear-[160deg] from-panel to-[rgba(19,16,19,0.4)] p-[52px] max-[800px]:grid-cols-1 max-[800px]:p-9 max-[800px]:px-6 max-[800px]:text-center">
            <div>
              <p className="eyebrow text-left max-[800px]:text-center">GROW TOGETHER</p>
              <h2 className="section-title mb-[18px] text-left max-[800px]:text-center">Partner with Paragon Network</h2>
              <p className="mb-2 max-w-[52ch] text-[15.5px] leading-[1.7] text-text-muted max-[800px]:mx-auto">
                Run a server or community that could use more reach? Our partnerships program plugs you directly
                into the Paragon hub — cross-promotion with our player base, and the chance to have your server
                featured in front of our community. If you&apos;re interested in partnering, or in joining our staff
                team, come talk to us directly.
              </p>
              <p className="mb-7 border-l-2 border-panel-line pl-2.5 font-mono text-[11.5px] text-text-faint">
                Note: pitch copy above is a placeholder — swap in the client&apos;s final wording here.
              </p>
              <div className="flex flex-wrap justify-start gap-4 max-[800px]:justify-center">
                <a
                  href="https://discord.gg/nmYHvnCa4T"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Apply on Discord
                </a>
                <Link href="/partners" className="btn btn-ghost">
                  See Our Partners
                </Link>
              </div>
            </div>
            <div aria-hidden="true" className="relative grid h-[220px] place-items-center max-[800px]:order-[-1] max-[800px]:h-40">
              <div className="absolute h-[200px] w-[200px] animate-partners-spin rounded-full border border-panel-line max-[800px]:h-[140px] max-[800px]:w-[140px]" />
              <div className="absolute h-[150px] w-[150px] animate-partners-spin-reverse rounded-full border border-paragon/30 max-[800px]:h-[100px] max-[800px]:w-[100px]" />
              <Image
                src="/logo.png"
                alt=""
                width={84}
                height={84}
                className="h-[84px] w-[84px] object-contain drop-shadow-[0_0_20px_rgba(199,125,255,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="pb-[130px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="eyebrow">JOIN PARAGON NETWORK TODAY</p>
          <h2 className="section-title">Connect</h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {connectCards.map((card) => (
              <div key={card.label} className="connect-card">
                <p className="mb-3.5 text-xs font-bold tracking-[0.12em] text-paragon-glow uppercase">{card.label}</p>
                {card.copy ? (
                  <CopyButton text={card.copy} className="connect-value">
                    <span>{card.value}</span>
                    <span aria-hidden="true" className="text-sm text-text-faint">⧉</span>
                  </CopyButton>
                ) : card.internal ? (
                  <Link href={card.href ?? "#"} className="connect-value">
                    <span>{card.value}</span>
                    <span aria-hidden="true" className="text-sm text-text-faint">↗</span>
                  </Link>
                ) : (
                  <a href={card.href} target="_blank" rel="noopener" className="connect-value">
                    <span>{card.value}</span>
                    <span aria-hidden="true" className="text-sm text-text-faint">↗</span>
                  </a>
                )}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
