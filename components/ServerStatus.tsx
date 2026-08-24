"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { CopyGlyph, RefreshGlyph } from "@/components/icons";
import { SERVER_IP } from "@/lib/data";
import type { ServerStatusState } from "@/lib/serverStatus";

const COOLDOWN_SECONDS = 15;

export function ServerStatus({ initialStatus }: { initialStatus: ServerStatusState }) {
  const [status, setStatus] = useState<ServerStatusState>(initialStatus);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCooldown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  async function handleRefresh() {
    if (cooldown > 0 || loading) return;
    setLoading(true);
    setCooldown(COOLDOWN_SECONDS);
    try {
      const res = await fetch("/api/server-status", { cache: "no-store" });
      setStatus((await res.json()) as ServerStatusState);
    } catch {
      setStatus({ configured: true, online: false, error: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  }

  const unknown = !status.configured;
  const online = status.configured && status.online;

  const dot = unknown ? "bg-fg-subtle" : online ? "bg-success" : "bg-danger";
  const stateLabel = unknown ? "Unknown" : online ? "Online" : "Offline";
  const stateColor = unknown ? "text-fg-subtle" : online ? "text-success" : "text-danger";

  const pct =
    online && status.maxPlayers
      ? Math.min(100, Math.round(((status.players ?? 0) / status.maxPlayers) * 100))
      : 0;

  return (
    <div className="card overflow-hidden">
      {/* Header row */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {online && (
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-75`} />
            )}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
          </span>
          <span className={`text-[13px] font-semibold ${stateColor}`}>{stateLabel}</span>
        </div>

        <button
          type="button"
          onClick={handleRefresh}
          disabled={cooldown > 0 || loading}
          className="btn btn-ghost gap-1.5 px-3 py-1.5 text-[12.5px] tabular-nums disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-transparent disabled:hover:text-fg-muted"
        >
          <RefreshGlyph size={14} className={loading ? "animate-spin" : undefined} />
          {loading ? "Refreshing" : cooldown > 0 ? `${cooldown}s` : "Refresh"}
        </button>
      </div>

      {/* Body */}
      <div
        className="px-6 py-10 text-center transition-opacity duration-300"
        style={{ opacity: loading ? 0.5 : 1 }}
      >
        {unknown ? (
          <>
            <p className="text-[15px] font-medium text-fg">Status service not connected</p>
            <p className="lede mx-auto mt-2 max-w-sm text-[13.5px]">
              {status.message ?? "The live player count will appear here once the status bot is online."}
            </p>
          </>
        ) : online ? (
          <>
            <p className="text-5xl font-bold tracking-tight text-fg tabular-nums sm:text-6xl">
              {status.players}
              <span className="text-2xl font-medium text-fg-subtle sm:text-3xl">/{status.maxPlayers}</span>
            </p>
            <p className="mt-2 text-[13px] tracking-wide text-fg-subtle">players online right now</p>

            <div className="mx-auto mt-7 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-700 ease-out"
                style={{ width: `${Math.max(pct, 2)}%` }}
              />
            </div>
          </>
        ) : (
          <>
            <p className="text-[15px] font-medium text-fg">Server is unreachable</p>
            <p className="lede mx-auto mt-2 max-w-sm text-[13.5px]">
              {status.error ?? "We couldn't reach the server. It may be restarting — try again shortly."}
            </p>
          </>
        )}
      </div>

      {/* Footer row */}
      <div className="flex flex-col items-center gap-3 border-t border-line px-6 py-4 sm:flex-row sm:justify-between">
        <CopyButton
          text={SERVER_IP}
          className="flex items-center gap-2 font-mono text-[13px] text-fg-muted transition-colors hover:text-fg"
        >
          {SERVER_IP}
          <CopyGlyph size={13} />
        </CopyButton>

        {status.updatedAt && (
          <p className="text-xs text-fg-subtle" suppressHydrationWarning>
            Updated {new Date(status.updatedAt).toLocaleTimeString("en-US")}
          </p>
        )}
      </div>
    </div>
  );
}
