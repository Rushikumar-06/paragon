import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { voteLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vote — Paragon Network",
  description: "Vote for Paragon Network on every server list and earn in-game rewards.",
};

export default function VotePage() {
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
          <p className="eyebrow mb-3.5">EVERY VOTE COUNTS</p>
          <h1 className="mb-3.5 font-display text-[clamp(32px,5vw,52px)] text-text">Vote for Paragon</h1>
          <p className="mx-auto max-w-[56ch] text-[15.5px] leading-[1.7] text-text-muted">
            Vote on all {voteLinks.length} server lists below to earn in-game rewards and help more players
            discover Paragon Network. Most sites let you vote once every 24 hours.
          </p>
        </div>
      </section>

      <section className="py-5 pb-[130px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {voteLinks.map((link, index) => (
              <Reveal key={link.site} delayMs={(index % 6) * 60}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[14px] border border-panel-line bg-gradient-to-b from-panel to-panel/50 p-6 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-paragon-glow hover:shadow-[0_12px_32px_rgba(155,93,229,0.18)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-paragon opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-20"
                  />
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <span className="font-mono text-xs text-text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-text-faint transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paragon-glow"
                    >
                      ↗
                    </span>
                  </div>
                  <div className="relative z-10 mt-5">
                    <h3 className="font-display text-[16.5px] leading-snug text-text transition-colors duration-300 ease-out group-hover:text-paragon-glow">
                      {link.site}
                    </h3>
                    <p className="mt-3 text-[12.5px] font-semibold tracking-[0.08em] text-text-muted uppercase">
                      Vote Now
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={100}>
            <div className="mt-[60px] rounded-[20px] border border-panel-line bg-linear-[160deg] from-panel to-[rgba(19,16,19,0.4)] px-10 py-10 text-center">
              <h3 className="mb-2.5 font-display text-[22px] text-text">Thanks for supporting Paragon</h3>
              <p className="m-0 text-sm text-text-muted">
                Every vote helps push us up the rankings and brings new players into the network.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
