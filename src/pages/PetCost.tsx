import { useMemo, useState } from 'react'
import ToolShell from '../components/ToolShell'
import { Link } from 'react-router'
import { ArrowRight, CoinIcon } from '../components/Icons'

type Pet = 'dog-small' | 'dog-medium' | 'dog-large' | 'cat'
type FoodTier = 'budget' | 'mid' | 'premium'

const PETS: { id: Pet; label: string; food: Record<FoodTier, number>; vet: number; grooming: number }[] = [
  { id: 'dog-small', label: 'Small dog', food: { budget: 25, mid: 45, premium: 75 }, vet: 25, grooming: 20 },
  { id: 'dog-medium', label: 'Medium dog', food: { budget: 40, mid: 65, premium: 105 }, vet: 30, grooming: 35 },
  { id: 'dog-large', label: 'Large dog', food: { budget: 60, mid: 95, premium: 150 }, vet: 38, grooming: 50 },
  { id: 'cat', label: 'Cat', food: { budget: 20, mid: 35, premium: 60 }, vet: 20, grooming: 5 },
]

const FOOD_TIERS: { id: FoodTier; label: string; desc: string }[] = [
  { id: 'budget', label: 'Budget', desc: 'Complete but economical kibble' },
  { id: 'mid', label: 'Mid-range', desc: 'Quality brand, balanced nutrition' },
  { id: 'premium', label: 'Premium', desc: 'High-meat, grain-free, or fresh food' },
]

const fmt = (n: number) => `$${Math.round(n).toLocaleString()}`

export default function PetCost() {
  const [pet, setPet] = useState<Pet>('dog-medium')
  const [tier, setTier] = useState<FoodTier>('mid')
  const [insurance, setInsurance] = useState(true)
  const [grooming, setGrooming] = useState(false)
  const [toys, setToys] = useState(15)

  const result = useMemo(() => {
    const p = PETS.find((x) => x.id === pet)!
    const insuranceCost = pet === 'cat' ? 18 : pet === 'dog-large' ? 55 : pet === 'dog-medium' ? 42 : 32
    const rows = [
      { label: 'Food', amount: p.food[tier] },
      { label: 'Routine vet care (averaged)', amount: p.vet },
      { label: 'Treats, toys & enrichment', amount: toys },
      ...(insurance ? [{ label: 'Pet insurance', amount: insuranceCost }] : []),
      ...(grooming ? [{ label: 'Grooming', amount: p.grooming }] : []),
    ]
    const total = rows.reduce((s, r) => s + r.amount, 0)
    return { rows, total }
  }, [pet, tier, insurance, grooming, toys])

  return (
    <ToolShell
      kicker="Free tool"
      title="Monthly Pet Cost Estimator"
      intro="The honest question every future pet parent should ask: what does a pet really cost per month? Answer five quick questions and get a realistic monthly budget — averaged for the USA, UK, and Europe."
      slug="pet-cost-estimator"
      keywords="pet cost calculator, how much does a dog cost per month, dog expenses calculator, cat monthly budget"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-2xl border border-[#ece2cf] p-7 space-y-7">
          <div>
            <label className="label-caps text-bark/60 block mb-3">Your pet</label>
            <div className="grid grid-cols-2 gap-2.5">
              {PETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPet(p.id)}
                  className={`rounded-xl border px-4 py-3 font-semibold transition-colors ${
                    pet === p.id ? 'border-terracotta bg-[#f9ece6] text-forest' : 'border-[#e0d4bc] text-bark/70 hover:border-terracotta/50'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="label-caps text-bark/60 block mb-3">Food quality</label>
            <div className="space-y-2.5">
              {FOOD_TIERS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                    tier === t.id ? 'border-terracotta bg-[#f9ece6]' : 'border-[#e0d4bc] hover:border-terracotta/50'
                  }`}
                >
                  <span className="font-semibold text-forest">{t.label}</span>
                  <span className="text-sm text-bark/60 ml-2">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between bg-[#faf5ea] rounded-xl px-4 py-3.5 cursor-pointer">
              <span className="font-semibold text-forest">Pet insurance</span>
              <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} className="w-5 h-5 accent-terracotta" />
            </label>
            <label className="flex items-center justify-between bg-[#faf5ea] rounded-xl px-4 py-3.5 cursor-pointer">
              <span className="font-semibold text-forest">Regular grooming</span>
              <input type="checkbox" checked={grooming} onChange={(e) => setGrooming(e.target.checked)} className="w-5 h-5 accent-terracotta" />
            </label>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="label-caps text-bark/60">Treats & toys</label>
              <span className="font-display text-xl font-semibold text-terracotta">{fmt(toys)}/mo</span>
            </div>
            <input type="range" min={0} max={60} step={5} value={toys} onChange={(e) => setToys(Number(e.target.value))} className="w-full accent-terracotta" />
          </div>
        </div>

        <div className="bg-forest text-parch rounded-2xl p-8 relative overflow-hidden md:sticky md:top-24">
          <span className="absolute -right-6 -bottom-8 opacity-10"><CoinIcon className="w-36 h-36" /></span>
          <p className="label-caps text-tangerine relative">Estimated monthly cost</p>
          <p className="font-display text-7xl font-semibold my-4 text-parch relative">{fmt(result.total)}</p>
          <div className="space-y-2.5 mt-6 relative text-left">
            {result.rows.map((r) => (
              <div key={r.label} className="flex justify-between text-[15px] border-b border-parch/10 pb-2">
                <span className="text-parch/75">{r.label}</span>
                <span className="font-semibold">{fmt(r.amount)}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-parch/70 leading-relaxed relative">
            That's about <strong className="text-tangerine">{fmt(result.total * 12)}</strong> per year —
            plus one-time startup costs (bed, bowls, carrier, initial vaccines) of roughly $200–500.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-xl bg-secondary border border-tangerine/40 p-5 text-[15px] text-forest/90 leading-relaxed">
        <strong>A note on honesty:</strong> these are mid-range estimates in US dollars — in the
        UK and Europe, expect a similar ballpark in £/€. Real costs vary by city and breed.
        Whatever the number, please budget for a pet before bringing one home. An animal is a
        decade-plus commitment, and the kindest care is the care you can sustain.
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/articles/human-foods-dogs-can-cant-eat" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          15 human foods dogs can and can't eat <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/tools/food-safety-checker" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          Try the food safety checker <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ToolShell>
  )
}
