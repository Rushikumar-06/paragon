export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-panel-line py-[30px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-2 px-6 text-center">
        <p className="m-0 font-mono text-[12.5px] tracking-[0.06em] text-text-muted">
          One Network <span aria-hidden="true" className="text-paragon-glow">✦</span> Multiple Experiences{" "}
          <span aria-hidden="true" className="text-paragon-glow">✦</span> Join Paragon Network Today
        </p>
        <p className="m-0 text-xs text-text-faint">© {year} Paragon Network. Not affiliated with Mojang or Microsoft.</p>
      </div>
    </footer>
  );
}
