import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { ARTICLES, CATEGORIES } from '../data/articles'
import type { Category } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import TornEdge from '../components/TornEdge'
import SEO from '../components/SEO'
import { SearchIcon } from '../components/Icons'

export default function Blog() {
  const [params, setParams] = useSearchParams()
  const activeCat = (params.get('cat') as Category | null) || null
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'All Articles | Paws & Purpose'
  }, [])

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchCat = !activeCat || a.category === activeCat
      const q = query.trim().toLowerCase()
      const matchQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.keyword.includes(q)
      return matchCat && matchQ
    })
  }, [activeCat, query])

  const desc = activeCat
    ? `${activeCat} articles and guides on Paws & Purpose — practical, vet-aware ${activeCat.toLowerCase()} tips for pet owners and animal lovers.`
    : `Browse ${ARTICLES.length} free articles on dog care, cat care, pet health, street animal rescue, and donkey welfare in Pakistan. Practical, vet-aware guides for every pet owner.`
  const title = activeCat ? `${activeCat} Articles | Paws & Purpose` : 'All Articles | Paws & Purpose'

  return (
    <div>
      <SEO
        title={title}
        description={desc}
        path={activeCat ? `/articles?cat=${encodeURIComponent(activeCat)}` : '/articles'}
        keywords={activeCat ? `${activeCat.toLowerCase()}, pet guides, pet care` : 'dog care articles, cat care blog, pet health blog, animal rescue articles'}
      />
      <section className="bg-forest text-parch">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-20">
          <p className="label-caps text-tangerine mb-4">The library</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-balance text-parch">
            Every guide, free forever
          </h1>
          <p className="mt-5 text-lg text-parch/75 max-w-2xl leading-relaxed">
            {ARTICLES.length} practical, vet-aware articles on dogs, cats, and the street animals
              of Pakistan — written to be read, shared, and acted on.
          </p>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>

      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Search + filters */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 mb-10">
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-bark/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides — try “panting” or “purr”…"
              className="w-full bg-white border border-[#e0d4bc] rounded-full pl-11 pr-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setParams({})}
              className={`label-caps px-4 py-2.5 rounded-full border transition-colors ${
                !activeCat
                  ? 'bg-forest text-parch border-forest'
                  : 'bg-white text-forest/70 border-[#e0d4bc] hover:border-forest'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.name}
                onClick={() => setParams({ cat: c.name })}
                className={`label-caps px-4 py-2.5 rounded-full border transition-colors ${
                  activeCat === c.name
                    ? 'text-cream border-transparent'
                    : 'bg-white text-forest/70 border-[#e0d4bc] hover:border-forest'
                }`}
                style={activeCat === c.name ? { backgroundColor: c.color } : undefined}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-forest mb-2">Nothing sniffed out here</p>
            <p className="text-bark/70">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
