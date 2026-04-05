import { BellRing, Box, PercentCircle } from 'lucide-react';

const iconMap = {
  promotion: PercentCircle,
  inventory: Box,
  alert: BellRing
} as const;

type ColderEventCardProps = {
  title: string;
  detail: string;
  metric: string;
  icon: keyof typeof iconMap;
};

export function ColderEventCard({ title, detail, metric, icon }: ColderEventCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="cold-card p-4">
      <div className="mb-3 flex items-start justify-between">
        <div className="rounded-xl border border-cold-cyan/35 bg-cyan-950/40 p-2">
          <Icon className="h-4 w-4 text-cold-cyan" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold tracking-wide text-cold-mint">{metric}</p>
      </div>
      <h3 className="text-sm font-semibold text-cold-text">{title}</h3>
      <p className="mt-1 text-xs text-cold-muted">{detail}</p>
    </article>
  );
}
