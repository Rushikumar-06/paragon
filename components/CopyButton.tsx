"use client";

import type { ReactNode } from "react";
import { useToast } from "@/components/ToastProvider";

export function CopyButton({ text, className, children }: { text: string; className?: string; children: ReactNode }) {
  const showToast = useToast();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied "${text}"`);
    } catch {
      showToast("Copy failed — select and copy manually");
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {children}
    </button>
  );
}
