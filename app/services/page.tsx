import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ServerStatus } from "@/components/ServerStatus";
import { getServerStatus } from "@/lib/serverStatus";

export const metadata: Metadata = {
  title: "Services — Paragon Network",
  description: "Live server status and tools for Paragon Network.",
};

export default async function ServicesPage() {
  const initialStatus = await getServerStatus();
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
          <p className="eyebrow mb-3.5">NETWORK TOOLS</p>
          <h1 className="mb-3.5 font-display text-[clamp(32px,5vw,52px)] text-text">Services</h1>
          <p className="mx-auto max-w-[56ch] text-[15.5px] leading-[1.7] text-text-muted">
            Live tools for Paragon Network, starting with real-time server status.
          </p>
        </div>
      </section>

      <section className="py-5 pb-[130px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <Reveal>
            <ServerStatus initialStatus={initialStatus} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
