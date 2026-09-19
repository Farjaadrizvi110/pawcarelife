import { Link } from 'react-router'
import { categoryMeta } from '../data/articles'
import type { Article } from '../data/articles'
import { DogIcon, CatIcon, HealthIcon, StreetIcon, DonkeyIcon, ArrowRight } from './Icons'

export function CategoryIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case 'dog': return <DogIcon className={className} />
    case 'cat': return <CatIcon className={className} />
    case 'health': return <HealthIcon className={className} />
    case 'street': return <StreetIcon className={className} />
    case 'donkey': return <DonkeyIcon className={className} />
    default: return <DogIcon className={className} />
  }
}

export function CategoryChip({ name, light }: { name: Article['category']; light?: boolean }) {
  const meta = categoryMeta(name)
  return (
    <span
      className="inline-flex items-center gap-1.5 label-caps px-3 py-1.5 rounded-full"
      style={{
        backgroundColor: light ? meta.color : meta.soft,
        color: light ? '#fcf9f3' : meta.color,
      }}
    >
      <CategoryIcon icon={meta.icon} className="w-3.5 h-3.5" />
      {name}
    </span>
  )
}

/** Editorial article card — flat color field, big serif title, category chip */
export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const meta = categoryMeta(article.category)
  const rotations = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.5deg]']
  const rotation = rotations[index % rotations.length]

  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`card-lift group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#ece2cf] ${rotation} hover:rotate-0`}
    >
      <div
        className="h-36 flex items-end justify-between p-5 relative overflow-hidden"
        style={{ backgroundColor: meta.soft }}
      >
        <span
          className="absolute -right-6 -top-8 opacity-[0.13] group-hover:opacity-25 group-hover:rotate-12 transition-all duration-500"
          style={{ color: meta.color }}
        >
          <CategoryIcon icon={meta.icon} className="w-36 h-36" />
        </span>
        <CategoryChip name={article.category} />
        <span className="text-xs font-medium text-bark/60">{article.readTime} min read</span>
      </div>
      <div className="p-5 pt-4 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold leading-snug text-forest group-hover:text-terracotta transition-colors text-balance">
          {article.title}
        </h3>
        <p className="mt-2.5 text-[15px] text-bark/75 leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
          Read the guide
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
