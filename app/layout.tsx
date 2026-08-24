import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ToastProvider } from "@/components/ToastProvider";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Paragon Network — One Network. Endless Adventures.",
  description:
    "Paragon Network — a Minecraft server network with Survival, Lifesteal, Earth, Mini-Games and a community that never stops growing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void font-body text-text antialiased">
        <ToastProvider>
          <CursorGlow />
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
