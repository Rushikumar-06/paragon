import type { ReactElement, SVGProps } from "react";
import type { ConnectIconKey, ModeKey } from "@/lib/data";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

/* ---------- Game mode icons ---------- */

const modeIcons: Record<ModeKey, (props: IconProps) => ReactElement> = {
  survival: (props) => (
    <Icon {...props}>
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="M13 19l6-6" />
      <path d="M16 16l4 4" />
      <path d="M9.5 6.5 3 3l3.5 6.5" />
    </Icon>
  ),
  lifesteal: (props) => (
    <Icon {...props}>
      <path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 0 0-8-.5A4 4 0 0 0 6 8c0 2.5 1.5 4.5 3 6l3 3z" />
    </Icon>
  ),
  earth: (props) => (
    <Icon {...props}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </Icon>
  ),
  minigames: (props) => (
    <Icon {...props}>
      <path d="M7 12h3.5m-1.75-1.75v3.5" />
      <circle cx={17} cy={10.8} r={0.9} fill="currentColor" stroke="none" />
      <circle cx={14.8} cy={13.6} r={0.9} fill="currentColor" stroke="none" />
      <rect x={2.5} y={7} width={19} height={10.5} rx={4} />
    </Icon>
  ),
  community: (props) => (
    <Icon {...props}>
      <circle cx={9} cy={8} r={3} />
      <path d="M2.5 19.5c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" />
      <circle cx={17} cy={8.5} r={2.4} />
      <path d="M17 13.5c2.6 0 4.5 1.9 4.5 4.5" />
    </Icon>
  ),
  cobblemon: (props) => (
    <Icon {...props}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h5.5m7 0H21" />
      <circle cx={12} cy={12} r={3} />
    </Icon>
  ),
  skyblock: (props) => (
    <Icon {...props}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
      <path d="M12 12.2 20 8M12 12.2 4 8m8 4.2v8.3" />
    </Icon>
  ),
};

export function ModeIcon({ mode, ...props }: { mode: ModeKey } & IconProps) {
  const Glyph = modeIcons[mode];
  return <Glyph {...props} />;
}

/* ---------- Connect card icons ---------- */

const connectIcons: Record<ConnectIconKey, (props: IconProps) => ReactElement> = {
  server: (props) => (
    <Icon {...props}>
      <rect x={3} y={4} width={18} height={7} rx={2} />
      <rect x={3} y={13} width={18} height={7} rx={2} />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </Icon>
  ),
  discord: (props) => (
    <Icon {...props}>
      <path d="M8.5 6.5C7 6.8 4.9 7.7 4 9c-1.2 2.4-1.5 5.5-1 8 1.3 1.1 2.9 1.8 4.5 2l1-1.7" />
      <path d="M15.5 6.5c1.5.3 3.6 1.2 4.5 2.5 1.2 2.4 1.5 5.5 1 8-1.3 1.1-2.9 1.8-4.5 2l-1-1.7" />
      <path d="M8.5 6.5 9 5c2-.4 4-.4 6 0l.5 1.5" />
      <path d="M7.5 16c3 1.3 6 1.3 9 0" />
      <circle cx={9.5} cy={12} r={1.2} fill="currentColor" stroke="none" />
      <circle cx={14.5} cy={12} r={1.2} fill="currentColor" stroke="none" />
    </Icon>
  ),
  store: (props) => (
    <Icon {...props}>
      <path d="M3 6h2l1.6 9.3a2 2 0 0 0 2 1.7h7.2a2 2 0 0 0 2-1.6L19 9H6" />
      <circle cx={9.5} cy={20} r={1.1} />
      <circle cx={16.5} cy={20} r={1.1} />
    </Icon>
  ),
  wiki: (props) => (
    <Icon {...props}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </Icon>
  ),
  vote: (props) => (
    <Icon {...props}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
    </Icon>
  ),
  mail: (props) => (
    <Icon {...props}>
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  ),
  staff: (props) => (
    <Icon {...props}>
      <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z" />
      <path d="M8 6H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
      <path d="m9 13 2 2 4-4" />
    </Icon>
  ),
};

export function ConnectIcon({ name, ...props }: { name: ConnectIconKey } & IconProps) {
  const Glyph = connectIcons[name];
  return <Glyph {...props} />;
}

/* ---------- UI glyphs ---------- */

export function CopyGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x={9} y={9} width={11} height={11} rx={2} />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </Icon>
  );
}

export function ExternalGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 5h6v6" />
      <path d="m19 5-8.5 8.5" />
      <path d="M18 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5" />
    </Icon>
  );
}

export function ArrowRightGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function CheckGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Icon>
  );
}

export function MenuGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function RefreshGlyph(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 11a8 8 0 1 0-.6 4" />
      <path d="M20 4.5V11h-6.5" />
    </Icon>
  );
}
