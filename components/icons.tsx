import type { ReactElement, SVGProps } from "react";
import type { ModeKey } from "@/lib/data";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

const icons: Record<ModeKey, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  survival: (props) => (
    <IconBase {...props}>
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="M13 19l6-6" />
      <path d="M16 16l4 4" />
      <path d="M19 21l2-2" />
      <path d="M9.5 6.5 3 3l3.5 6.5" />
    </IconBase>
  ),
  lifesteal: (props) => (
    <IconBase {...props}>
      <path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 0 0-8-.5A4 4 0 0 0 6 8c0 2.5 1.5 4.5 3 6l3 3z" />
    </IconBase>
  ),
  earth: (props) => (
    <IconBase {...props}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </IconBase>
  ),
  minigames: (props) => (
    <IconBase {...props}>
      <path d="M6 12h4m-2-2v4" />
      <circle cx={17} cy={10.5} r={0.8} fill="currentColor" stroke="none" />
      <circle cx={15} cy={13.5} r={0.8} fill="currentColor" stroke="none" />
      <rect x={2} y={7} width={20} height={11} rx={4} />
    </IconBase>
  ),
  community: (props) => (
    <IconBase {...props}>
      <circle cx={9} cy={8} r={3} />
      <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
      <circle cx={17} cy={8} r={2.5} />
      <path d="M17 14c2.8 0 5 2.2 5 5" />
    </IconBase>
  ),
  cobblemon: (props) => (
    <IconBase {...props}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h6m6 0h6" />
      <circle cx={12} cy={12} r={2.5} />
    </IconBase>
  ),
  skyblock: (props) => (
    <IconBase {...props}>
      <rect x={7.5} y={7.5} width={9} height={9} rx={1.5} transform="rotate(45 12 12)" />
      <circle cx={6} cy={18} r={0.8} fill="currentColor" stroke="none" />
      <circle cx={18} cy={18} r={0.8} fill="currentColor" stroke="none" />
    </IconBase>
  ),
};

export function ModeIcon({ mode, ...props }: { mode: ModeKey } & SVGProps<SVGSVGElement>) {
  const Icon = icons[mode];
  return <Icon {...props} />;
}
