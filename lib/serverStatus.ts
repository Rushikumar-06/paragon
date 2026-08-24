export interface ServerStatusState {
  configured: boolean;
  online?: boolean;
  players?: number;
  maxPlayers?: number;
  updatedAt?: string;
  message?: string;
  error?: string;
}

interface BotStatusResponse {
  online: boolean;
  players: number;
  maxPlayers: number;
}

export async function getServerStatus(): Promise<ServerStatusState> {
  const botUrl = process.env.BOT_STATUS_URL;
  const botToken = process.env.BOT_STATUS_TOKEN;

  if (!botUrl) {
    return { configured: false, message: "Status bot is not configured yet." };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(botUrl, {
      headers: botToken ? { Authorization: `Bearer ${botToken}` } : undefined,
      signal: controller.signal,
      // Server-side floor: at most one real request to the bot every 10s,
      // no matter how many visitors hit the refresh button at once.
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      return {
        configured: true,
        online: false,
        error: `Bot responded with ${res.status}`,
        updatedAt: new Date().toISOString(),
      };
    }

    const data: BotStatusResponse = await res.json();

    return {
      configured: true,
      online: data.online,
      players: data.players,
      maxPlayers: data.maxPlayers,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return {
      configured: true,
      online: false,
      error: "Could not reach the status bot.",
      updatedAt: new Date().toISOString(),
    };
  } finally {
    clearTimeout(timeout);
  }
}
