"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !pointerFine) return;

    const el = ref.current;
    if (!el) return;

    function handlePointerMove(e: PointerEvent) {
      el!.style.setProperty("--x", `${e.clientX}px`);
      el!.style.setProperty("--y", `${e.clientY}px`);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 max-[900px]:hidden"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 30%), rgba(155,93,229,0.06), transparent 60%)",
      }}
    />
  );
}
