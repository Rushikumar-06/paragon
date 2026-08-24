import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServerStatus } from "@/components/ServerStatus";
import { ArrowRightGlyph, ExternalGlyph } from "@/components/icons";
import { getServerStatus } from "@/lib/serverStatus";
import { DISCORD_URL, SERVER_IP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Server Status",
  description: "Live player count and connection details for Paragon Network.",
};

const howTo = [
  {
    step: "01",
    title: "Add the server",
    body: `Open Minecraft, go to Multiplayer → Add Server and enter ${SERVER_IP} as the address.`,
  },
  {
    step: "02",
    title: "Java or Bedrock",
    body: "The same address works on both editions. Bedrock players use port 19132 if prompted.",
  },
  {
    step: "03",
    title: "Pick your world",
    body: "You'll land in the hub — walk into a portal to join Survival, Lifesteal, Earth and the rest.",
  },
];

export default async function ServicesPage() {
  const initialStatus = await getServerStatus();

  return (
    <>
      <PageHero
        eyebrow="Network tools"
        title="Server status"
        subtitle="Live player count straight from the network, plus everything you need to connect."
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <ServerStatus initialStatus={initialStatus} />
            </Reveal>
          </div>

          <div className="mt-20">
            <Reveal className="text-center">
              <p className="eyebrow">Getting in</p>
              <h2 className="h-section mt-3">How to connect</h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {howTo.map((item, i) => (
                <Reveal key={item.step} delayMs={i * 70} className="h-full">
                  <div className="card h-full p-6">
                    <span className="font-mono text-[12px] font-medium text-brand-bright">{item.step}</span>
                    <h3 className="mt-3 text-[15px] font-bold tracking-tight text-fg">{item.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={100}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-10 text-center sm:px-12">
              <h2 className="text-xl font-bold tracking-tight text-fg">Having trouble connecting?</h2>
              <p className="lede max-w-md">
                Our staff team is in Discord and usually replies within the hour.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <a href={DISCORD_URL} target="_blank" rel="noopener" className="btn btn-primary">
                  Get support on Discord
                  <ExternalGlyph size={15} />
                </a>
                <Link href="/#modes" className="btn btn-ghost">
                  Browse game modes
                  <ArrowRightGlyph size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
