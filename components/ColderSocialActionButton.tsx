import type { LucideIcon } from 'lucide-react';

type ColderSocialActionButtonProps = {
  label: string;
  icon: LucideIcon;
};

export function ColderSocialActionButton({ label, icon: Icon }: ColderSocialActionButtonProps) {
  return (
    <button
      type="button"
      className="flex min-w-[112px] flex-col items-center justify-center gap-1 rounded-xl border border-cold-line/70 bg-gradient-to-b from-cyan-900/60 to-cyan-950/70 px-3 py-2 text-[11px] font-semibold tracking-wide text-cold-mint transition hover:border-cold-cyan/50 hover:text-cold-cyan"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
