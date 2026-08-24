export type ModeKey = "survival" | "lifesteal" | "earth" | "minigames" | "community";

export interface GameMode {
  key: ModeKey;
  name: string;
  features: string[];
}

export const gameModes: GameMode[] = [
  {
    key: "survival",
    name: "Survival",
    features: ["Classic survival", "Player shops", "Land claims", "Custom enchantments", "Active economy"],
  },
  {
    key: "lifesteal",
    name: "Lifesteal",
    features: ["Steal hearts", "Custom abilities", "PvP focused", "Leaderboards", "Non-stop action"],
  },
  {
    key: "earth",
    name: "Earth",
    features: ["Custom Earth map", "Towns & nations", "Grief protection", "Resource world", "War & diplomacy"],
  },
  {
    key: "minigames",
    name: "Mini-Games",
    features: ["Fun mini-games", "Party with friends", "Regular updates", "Tournaments", "Rewards & prizes"],
  },
  {
    key: "community",
    name: "Community",
    features: ["Friendly community", "Events & giveaways", "Suggestions matter", "Active Discord", "Always improving"],
  },
];

export interface ConnectCard {
  label: string;
  value: string;
  tags: string[];
  href?: string;
  copy?: string;
  internal?: boolean;
}

export const connectCards: ConnectCard[] = [
  {
    label: "IP Address",
    value: "paragonnetwork.us",
    copy: "paragonnetwork.us",
    tags: ["Java Edition", "Bedrock Edition"],
  },
  {
    label: "Join Our Discord",
    value: "discord.gg/nmYHvnCa4T",
    href: "https://discord.gg/nmYHvnCa4T",
    tags: ["Chat", "Events", "Giveaways", "Support"],
  },
  {
    label: "Visit Our Store",
    value: "paragon-network-shop.tebex.io",
    href: "https://paragon-network-shop.tebex.io",
    tags: ["Ranks", "Perks", "Cosmetics"],
  },
  {
    label: "Wiki",
    value: "wiki.paragonnetwork.us",
    href: "#",
    tags: ["Guides", "Rules"],
  },
  {
    label: "Vote for Us",
    value: "Vote Now",
    href: "/vote",
    internal: true,
    tags: ["Earn rewards"],
  },
  {
    label: "Email Us",
    value: "paragonnetwork.usa@gmail.com",
    copy: "paragonnetwork.usa@gmail.com",
    tags: ["Business & support"],
  },
];

export interface VoteLink {
  site: string;
  url: string;
}

export const voteLinks: VoteLink[] = [
  { site: "MinecraftServers.org", url: "https://minecraftservers.org/vote/682220" },
  { site: "PlanetMinecraft.com", url: "https://www.planetminecraft.com/server/paragon-network-6822468/vote/" },
  { site: "Best Minecraft Servers", url: "https://best-minecraft-servers.co/server-paragon-network.32062" },
  { site: "TopMinecraftServers", url: "https://topminecraftservers.org/vote/42499" },
  { site: "Minecraft.buzz", url: "https://minecraft.buzz/vote/18482" },
  { site: "Minecraft ServerList", url: "https://minecraft-serverlist.com/server/4015/vote" },
  { site: "Minecraft.global", url: "https://minecraft.global/servers/05cb77c2-c392-444a-acf7-717705bcdfea/vote" },
  { site: "Play Minecraft Servers", url: "https://play-minecraft-servers.com/minecraft-servers/paragon-network/?tab=vote#server-vote" },
  { site: "BestServers.com", url: "https://bestservers.com/server/3878" },
  { site: "Minerank", url: "https://www.minerank.com/paragon-network" },
  { site: "Minecraft Servers Blog", url: "https://minecraftservers.blog/server/paragon-network" },
  { site: "Minecraft Menu", url: "https://minecraft.menu/server-paragon-network.6037" },
  { site: "Minecraft-MP.com", url: "https://minecraft-mp.com/server/358915/vote/" },
];

export interface Partner {
  name: string;
  tagline: string;
  banner: string;
  tags: string[];
  ip: string;
  discordHref: string;
  visitHref: string;
}

export const partners: Partner[] = [
  {
    name: "OtherWorlds Awakening",
    tagline: "Minecraft 1.21.1 Modpack Server",
    banner: "/partners/otherworlds-awakening.png",
    tags: ["Survival", "Lore", "War", "Tensura", "1.21.1"],
    ip: "otherworldsawakening.theanimevault.net",
    discordHref: "https://discord.gg/HZ33WY4RdH",
    visitHref: "https://www.curseforge.com/minecraft/modpacks/otherworlds-awakening",
  },
];
