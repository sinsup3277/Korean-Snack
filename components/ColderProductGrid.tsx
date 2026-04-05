import Image from 'next/image';

type Product = {
  name: string;
  tag: string;
  image: string;
};

type ColderProductGridProps = {
  items: Product[];
};

export function ColderProductGrid({ items }: ColderProductGridProps) {
  return (
    <section className="space-y-3" aria-label="Visual menu feed">
      <h2 className="text-base font-semibold tracking-wide text-cold-text">VISUAL MENU / FEED</h2>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <article key={item.name} className="cold-card overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, 240px"
                className="object-cover saturate-50 hue-rotate-[160deg]"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-cold-muted">{item.tag}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
