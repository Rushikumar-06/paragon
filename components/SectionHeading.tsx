import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-3">{title}</h2>
      {subtitle && <p className={`lede mt-4 ${centered ? "mx-auto" : ""}`}>{subtitle}</p>}
    </Reveal>
  );
}
