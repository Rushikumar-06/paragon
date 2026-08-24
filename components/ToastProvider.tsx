"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { CheckGlyph } from "@/components/icons";

const ToastContext = createContext<((message: string) => void) | null>(null);

export function useToast() {
  const showToast = useContext(ToastContext);
  if (!showToast) throw new Error("useToast must be used within ToastProvider");
  return showToast;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback((text: string) => {
    setMessage(text);
    setVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 2400);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2.5 rounded-xl border border-line-strong bg-surface-2/95 px-4 py-3 text-[13px] font-medium text-fg shadow-[0_16px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 ease-out ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
          <CheckGlyph size={13} />
        </span>
        {message}
      </div>
    </ToastContext.Provider>
  );
}
