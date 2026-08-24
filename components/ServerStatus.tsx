"use client";

import { useEffect, useState } from "react";
import type { ServerStatusState } from "@/lib/serverStatus";

const COOLDOWN_SECONDS = 15;

export function ServerStatus({ initialStatus }: { initialStatus: ServerStatusState }) {
  const [status, setStatus] = useState<ServerStatusState>(initialStatus);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCooldown((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  async function handleRefresh() {
    if (cooldown > 0 || loading) return;
    setLoading(true);
    setCooldown(COOLDOWN_SECONDS);
    try {
      const res = await fetch("/api/server-status", { cache: "no-store" });
      const data: ServerStatusState = await res.json();
      setStatus(data);
    } catch {
      setStatus({ configured: true, online: false, error: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  }

  const dotColor = !status.configured ? "bg-text-faint" : status.online ? "bg-minigames" : "bg-lifesteal";
  const disabled = cooldown > 0 || loading;

  return (
    <div className="mx-auto max-w-md rounded-[14px] border border-panel-line bg-panel px-8 py-10 text-center">
      <div className="mb-6 flex items-center justify-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          {status.online && (
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-75`} />
          )}
          <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dotColor}`} />
        </span>
        <p className="m-0 text-xs font-bold tracking-[0.12em] text-paragon-glow uppercase">Live Player Count</p>
      </div>

      <div
        className="flex min-h-[92px] flex-col items-center justify-center transition-opacity duration-300 ease-out"
        style={{ opacity: loading ? 0.5 : 1 }}
      >
        {!status.configured ? (
          <p className="max-w-[36ch] text-sm text-text-muted">
            {status.message ?? "Status service isn't configured yet — check back soon."}
          </p>
        ) : status.online ? (
          <>
            <p className="m-0 font-display text-5xl text-text">
              {status.players}
              <span className="text-2xl text-text-faint">/{status.maxPlayers}</span>
            </p>
            <p className="mt-2 text-xs tracking-[0.1em] text-text-muted uppercase">players online</p>
          </>
        ) : (
          <p className="max-w-[36ch] text-sm text-lifesteal">
            Server appears to be offline{status.error ? ` — ${status.error}` : ""}.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleRefresh}
        disabled={disabled}
        className="btn btn-ghost mt-7 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-panel-line disabled:hover:text-text"
      >
        {loading ? "Refreshing…" : cooldown > 0 ? `Refresh available in ${cooldown}s` : "Refresh"}
      </button>

      {status.updatedAt && (
        <p className="mt-4 text-[11px] text-text-faint" suppressHydrationWarning>
          Last updated {new Date(status.updatedAt).toLocaleTimeString("en-US")}
        </p>
      )}
    </div>
  );
}
