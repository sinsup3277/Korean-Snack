import Image from 'next/image';
import { Gift, Share2, UserPlus, MapPin, Star } from 'lucide-react';
import { ColderEventCard } from '@/components/ColderEventCard';
import { ColderProductGrid } from '@/components/ColderProductGrid';
import { ColderSocialActionButton } from '@/components/ColderSocialActionButton';

const carouselImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80'
];

const productItems = [
  {
    name: 'Mint Cream Croffle',
    tag: 'SIGNATURE',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Iced Black Latte',
    tag: 'BEST SELLER',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sea Salt Financier',
    tag: 'LIMITED',
    image:
      'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Chilled Matcha Cube',
    tag: 'SEASONAL',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'
  }
];

export default function StoreDetailPage() {
  return (
    <main className="mx-auto min-h-screen max-w-md space-y-5 bg-gradient-to-b from-cold-base via-cold-base to-[#091724] px-4 pb-28 pt-4">
      <section aria-label="Store gallery" className="space-y-2">
        <div className="scrollbar-hidden flex snap-x gap-3 overflow-x-auto">
          {carouselImages.map((src, index) => (
            <article key={src} className="relative h-52 min-w-full snap-center overflow-hidden rounded-2xl border border-cold-line/60">
              <Image
                src={src}
                alt={`Store preview ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover saturate-50 hue-rotate-[155deg]"
              />
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-1.5">
          {carouselImages.map((_, i) => (
            <span key={`indicator-${i}`} className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-cold-cyan' : 'w-2 bg-cold-line'}`} />
          ))}
        </div>
      </section>

      <section className="cold-card p-4" aria-label="Store identity">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-semibold tracking-wide text-cold-text">Blue Brick Bakery</h1>
            <p className="text-xs uppercase tracking-[0.18em] text-cold-muted">Premium Dessert Cafe</p>
          </div>
          <span className="rounded-md border border-cold-cyan/70 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-cold-cyan">
            ACTIVE EVENT
          </span>
        </div>

        <div className="mb-3 flex flex-wrap gap-3 text-xs text-cold-muted">
          <p className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-cold-cyan" /> 4.8 / 5.0
          </p>
          <p className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-cold-cyan" /> 218 Yeonnam-ro, Seoul
          </p>
        </div>

        <p className="text-sm leading-relaxed text-cold-text/90">
          Functional modern bakery with daily-prepped pastries and low-sugar beverages. Quiet seating, quick pickup,
          and predictable inventory updates.
        </p>
      </section>

      <section className="space-y-3" aria-label="Event and promotions">
        <h2 className="text-base font-semibold tracking-wide text-cold-text">EVENT & PROMOTION GRID</h2>
        <div className="grid grid-cols-2 gap-3">
          <ColderEventCard
            title="Q3 Product Promotion"
            detail="Buy any two cold desserts and receive 15% off selected drinks."
            metric="Q3 / 15%"
            icon="promotion"
          />
          <ColderEventCard
            title="Daily Inventory Reduction"
            detail="Final two hours: dynamic markdown for same-day bakery items."
            metric="LIVE / -30%"
            icon="inventory"
          />
        </div>
      </section>

      <ColderProductGrid items={productItems} />

      <section className="fixed inset-x-0 bottom-4 z-20 mx-auto w-full max-w-md px-4" aria-label="Social interaction bar">
        <div className="cold-card flex items-center justify-between gap-2 bg-cold-surface/90 p-3">
          <ColderSocialActionButton label="GIFT A PASTRY" icon={Gift} />
          <ColderSocialActionButton label="SHARE STORE" icon={Share2} />
          <ColderSocialActionButton label="INVITE FRIEND" icon={UserPlus} />
        </div>
      </section>
    </main>
  );
}
