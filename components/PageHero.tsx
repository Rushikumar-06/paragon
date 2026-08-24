import type { ReactNode } from "react";
import { Aurora } from "@/components/Aurora";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Aurora variant="page" />
      <div className="container-page relative text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.025em] text-fg">
          {title}
        </h1>
        {subtitle && <p className="lede mx-auto mt-5 max-w-xl">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
