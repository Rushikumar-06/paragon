import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRightGlyph } from "@/components/icons";
import { voteLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vote",
  description: "Vote for Paragon Network on every server list and earn in-game rewards.",
};

export default function VotePage() {
  return (
    <>
      <PageHero
        eyebrow="Every vote counts"
        title="Vote for Paragon"
        subtitle={`Vote across all ${voteLinks.length} server lists to earn in-game rewards and help more players find us. Most sites reset every 24 hours.`}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {voteLinks.map((link, i) => (
              <Reveal key={link.site} delayMs={(i % 3) * 60} className="h-full">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  className="card card-hover group flex h-full items-center gap-4 p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line font-mono text-[12px] font-medium text-fg-subtle transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/10 group-hover:text-brand-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14.5px] font-semibold text-fg">{link.site}</span>
                    <span className="mt-0.5 block text-xs text-fg-subtle">Vote now</span>
                  </span>

                  <span className="shrink-0 text-fg-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-bright">
                    <ArrowRightGlyph size={16} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={120}>
            <div className="mt-14 rounded-2xl border border-line bg-surface px-6 py-10 text-center sm:px-12">
              <h2 className="text-xl font-bold tracking-tight text-fg">Thanks for supporting Paragon</h2>
              <p className="lede mx-auto mt-3 max-w-md">
                Every vote pushes us up the rankings and brings new players into the network.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
