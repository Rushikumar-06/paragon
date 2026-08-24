export const SERVER_IP = "paragonnetwork.us";
export const DISCORD_URL = "https://discord.gg/nmYHvnCa4T";
export const STORE_URL = "https://paragon-network-shop.tebex.io";
export const STAFF_FORM_URL = "https://forms.gle/kLN4kk4oYATqjhae7";

export type ModeKey =
  | "survival"
  | "lifesteal"
  | "earth"
  | "minigames"
  | "community"
  | "cobblemon"
  | "skyblock";

export interface GameMode {
  key: ModeKey;
  name: string;
  blurb: string;
  features: string[];
}

export const gameModes: GameMode[] = [
  {
    key: "survival",
    name: "Survival",
    blurb: "The classic experience, refined with a player-driven economy.",
    features: ["Player shops", "Land claims", "Custom enchantments", "Active economy"],
  },
  {
    key: "lifesteal",
    name: "Lifesteal",
    blurb: "High-stakes PvP where every fight costs you hearts.",
    features: ["Steal hearts", "Custom abilities", "PvP focused", "Leaderboards"],
  },
  {
    key: "earth",
    name: "Earth",
    blurb: "Build a nation on a scale replica of the real world.",
    features: ["Custom Earth map", "Towns & nations", "Grief protection", "War & diplomacy"],
  },
  {
    key: "cobblemon",
    name: "Cobblemon",
    blurb: "Catch, train and battle across a custom-tuned region.",
    features: ["Catch & battle", "Gyms & elite four", "Trading & breeding", "Pokédex rewards"],
  },
  {
    key: "skyblock",
    name: "Skyblock",
    blurb: "Start on a floating island and build an empire from nothing.",
    features: ["Private islands", "Island upgrades", "Custom economy", "Challenges"],
  },
  {
    key: "minigames",
    name: "Mini-Games",
    blurb: "Quick rounds, party queues and seasonal tournaments.",
    features: ["Party with friends", "Regular updates", "Tournaments", "Rewards & prizes"],
  },
  {
    key: "community",
    name: "Community",
    blurb: "Events, giveaways and a staff team that actually listens.",
    features: ["Events & giveaways", "Suggestions matter", "Active Discord", "Always improving"],
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "7", label: "Game modes" },
  { value: "24/7", label: "Uptime" },
  { value: "Java + Bedrock", label: "Cross-play" },
  { value: "1.21+", label: "Version" },
];

export type ConnectIconKey = "server" | "discord" | "store" | "wiki" | "vote" | "mail" | "staff";

export interface ConnectCard {
  icon: ConnectIconKey;
  label: string;
  value: string;
  tags: string[];
  href?: string;
  copy?: string;
  internal?: boolean;
}

export const connectCards: ConnectCard[] = [
  {
    icon: "server",
    label: "Server address",
    value: SERVER_IP,
    copy: SERVER_IP,
    tags: ["Java Edition", "Bedrock Edition"],
  },
  {
    icon: "discord",
    label: "Discord",
    value: "discord.gg/nmYHvnCa4T",
    href: DISCORD_URL,
    tags: ["Chat", "Events", "Support"],
  },
  {
    icon: "store",
    label: "Store",
    value: "paragon-network-shop.tebex.io",
    href: STORE_URL,
    tags: ["Ranks", "Perks", "Cosmetics"],
  },
  {
    icon: "wiki",
    label: "Wiki",
    value: "wiki.paragonnetwork.us",
    href: "#",
    tags: ["Guides", "Rules"],
  },
  {
    icon: "vote",
    label: "Vote",
    value: "13 server lists",
    href: "/vote",
    internal: true,
    tags: ["Earn rewards", "Daily"],
  },
  {
    icon: "mail",
    label: "Business enquiries",
    value: "paragonnetwork.usa@gmail.com",
    copy: "paragonnetwork.usa@gmail.com",
    tags: ["Business", "Support"],
  },
  {
    icon: "staff",
    label: "Staff applications",
    value: "Apply to join the team",
    href: STAFF_FORM_URL,
    tags: ["Now open"],
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

export const navLinks = [
  { href: "/#modes", label: "Game Modes" },
  { href: "/services", label: "Server Status" },
  { href: "/partners", label: "Partners" },
  { href: "/vote", label: "Vote" },
];
