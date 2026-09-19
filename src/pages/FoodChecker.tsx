import { useMemo, useState } from 'react'
import ToolShell from '../components/ToolShell'
import { Link } from 'react-router'
import { FOODS, searchFoods } from '../data/foods'
import type { FoodStatus } from '../data/foods'
import { ArrowRight, CheckIcon, AlertIcon, XIcon, SearchIcon, BowlIcon } from '../components/Icons'

const STATUS_META: Record<FoodStatus, { label: string; color: string; soft: string; icon: React.ReactNode }> = {
  safe: { label: 'Safe to share', color: '#4a7a5c', soft: '#e2ede5', icon: <CheckIcon className="w-5 h-5" /> },
  caution: { label: 'Okay with caution', color: '#c9822e', soft: '#fbeed9', icon: <AlertIcon className="w-5 h-5" /> },
  toxic: { label: 'Toxic — never feed', color: '#b3402a', soft: '#f9e3dc', icon: <XIcon className="w-5 h-5" /> },
}

const SUGGESTIONS = ['chocolate', 'rice', 'grapes', 'peanut butter', 'chicken', 'onions', 'apple', 'cheese']

export default function FoodChecker() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FoodStatus | null>(null)

  const results = useMemo(() => {
    const base = query.trim() ? searchFoods(query) : FOODS
    return filter ? base.filter((f) => f.status === filter) : base
  }, [query, filter])

  const searched = query.trim().length > 0

  return (
    <ToolShell
      kicker="Free tool"
      title='"Is This Food Safe for My Dog?" Checker'
      intro="Those eyes under the dinner table are hard to resist — but some human foods are genuinely dangerous for dogs. Search a food and instantly see whether it's safe to share, okay with caution, or toxic."
      slug="food-safety-checker"
      keywords="can dogs eat, dog food safety checker, foods toxic to dogs, what human foods can dogs eat"
    >
      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <SearchIcon className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-bark/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a food — e.g. “can dogs eat rice”…"
          className="w-full bg-white border-2 border-[#e0d4bc] rounded-full pl-12 pr-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta shadow-sm"
          autoFocus
        />
      </div>

      {!searched && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="text-sm bg-white border border-[#e0d4bc] rounded-full px-4 py-2 text-forest/80 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Filter */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {([null, 'safe', 'caution', 'toxic'] as const).map((s) => (
          <button
            key={String(s)}
            onClick={() => setFilter(s)}
            className={`label-caps px-4 py-2.5 rounded-full border transition-colors ${
              filter === s
                ? 'bg-forest text-parch border-forest'
                : 'bg-white text-forest/70 border-[#e0d4bc] hover:border-forest'
            }`}
          >
            {s === null ? `All (${FOODS.length})` : `${STATUS_META[s].label} (${FOODS.filter((f) => f.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {results.map((food) => {
          const meta = STATUS_META[food.status]
          return (
            <div key={food.name} className="bg-white rounded-2xl border border-[#ece2cf] p-5 flex gap-4">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: meta.soft, color: meta.color }}
              >
                {meta.icon}
              </span>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display text-lg font-semibold text-forest">{food.name}</h3>
                  <span className="label-caps" style={{ color: meta.color }}>{meta.label}</span>
                </div>
                <p className="mt-1.5 text-[15px] text-bark/75 leading-relaxed">{food.note}</p>
              </div>
            </div>
          )
        })}
      </div>

      {searched && results.length === 0 && (
        <div className="text-center py-16">
          <BowlIcon className="w-12 h-12 mx-auto text-bark/30 mb-4" />
          <p className="font-display text-2xl text-forest mb-2">Not in our bowl yet</p>
          <p className="text-bark/70 max-w-md mx-auto">
            We don't have “{query}” listed. When in doubt, don't share — and check with your vet
            before offering any unfamiliar food.
          </p>
        </div>
      )}

      <div className="mt-10 rounded-xl bg-[#f9e8e1] border border-terracotta/25 p-5 text-[15px] text-forest/90 leading-relaxed">
        <strong>If your dog ate something toxic:</strong> note what and how much, call your vet or
        an animal poison helpline immediately, and don't wait for symptoms. Quick action saves
        lives. This tool is for informational purposes only and is not a substitute for
        professional veterinary advice.
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/articles/human-foods-dogs-can-cant-eat" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          Read: 15 human foods dogs can and can't eat <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/tools/dog-age-calculator" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          Try the dog age calculator <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ToolShell>
  )
}
