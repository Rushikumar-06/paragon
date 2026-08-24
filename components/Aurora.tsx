/**
 * Layered ambient background: soft brand-tinted blooms over a faint dot grid.
 * Purely decorative — sits behind content, never intercepts pointer events.
 */
export function Aurora({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const isHero = variant === "hero";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-dots mask-fade-b absolute inset-0 opacity-70" />

      <div
        className={`animate-drift absolute rounded-full blur-[110px] ${
          isHero
            ? "-top-[22%] left-1/2 h-[560px] w-[820px] max-w-[150vw] -translate-x-1/2 opacity-45"
            : "-top-[45%] left-1/2 h-[380px] w-[680px] max-w-[150vw] -translate-x-1/2 opacity-30"
        }`}
        style={{ background: "radial-gradient(circle, var(--color-brand) 0%, transparent 68%)" }}
      />

      {isHero && (
        <div
          className="animate-drift-slow absolute top-[8%] right-[6%] h-[380px] w-[380px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-brand-deep) 0%, transparent 70%)" }}
        />
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-base))" }}
      />
    </div>
  );
}
