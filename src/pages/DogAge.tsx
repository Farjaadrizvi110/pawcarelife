import { useMemo, useState } from 'react'
import ToolShell from '../components/ToolShell'
import { Link } from 'react-router'
import { ArrowRight, PawIcon } from '../components/Icons'

type Size = 'small' | 'medium' | 'large' | 'giant'

const SIZES: { id: Size; label: string; weight: string; perYear: number }[] = [
  { id: 'small', label: 'Small', weight: 'under 22 lbs (10 kg) · e.g. Chihuahua, Dachshund', perYear: 4 },
  { id: 'medium', label: 'Medium', weight: '22–55 lbs (10–25 kg) · e.g. Beagle, Border Collie', perYear: 5 },
  { id: 'large', label: 'Large', weight: '55–100 lbs (25–45 kg) · e.g. Labrador, German Shepherd', perYear: 6 },
  { id: 'giant', label: 'Giant', weight: 'over 100 lbs (45 kg) · e.g. Great Dane, Mastiff', perYear: 7 },
]

function toHumanYears(dogYears: number, size: Size): number {
  const perYear = SIZES.find((s) => s.id === size)!.perYear
  if (dogYears <= 0) return 0
  if (dogYears <= 1) return Math.round(dogYears * 15)
  if (dogYears <= 2) return Math.round(15 + (dogYears - 1) * 9)
  return Math.round(24 + (dogYears - 2) * perYear)
}

function lifeStage(human: number): { label: string; note: string } {
  if (human < 15) return { label: 'Puppy', note: 'Boundless energy and rapid learning — socialize, train gently, and keep those vet visits on schedule.' }
  if (human < 25) return { label: 'Adolescent', note: 'The teenage phase: testing boundaries is normal. Consistent training and plenty of exercise are your best friends.' }
  if (human < 45) return { label: 'Adult', note: 'Prime of life! Maintain routines, annual checkups, and watch the waistline — adult dogs gain weight easily.' }
  if (human < 65) return { label: 'Mature', note: 'Still active, but start watching for early stiffness and dental issues. Twice-yearly vet checks become wise.' }
  return { label: 'Senior', note: 'Golden years. Extra comfort, gentler exercise, and regular bloodwork help catch age-related changes early.' }
}

export default function DogAge() {
  const [years, setYears] = useState(3)
  const [months, setMonths] = useState(0)
  const [size, setSize] = useState<Size>('medium')

  const result = useMemo(() => {
    const dogAge = years + months / 12
    const human = toHumanYears(dogAge, size)
    return { human, stage: lifeStage(human) }
  }, [years, months, size])

  return (
    <ToolShell
      kicker="Free tool"
      title="Dog Age Calculator"
      intro="The old “multiply by seven” rule is a myth. Dogs mature rapidly in their first two years, then age at a pace that depends on their size. This calculator uses the modern veterinary estimate."
      slug="dog-age-calculator"
      keywords="dog age calculator, dog years to human years, how old is my dog in human years, dog age chart by size"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-[#ece2cf] p-7">
          <h2 className="font-display text-xl font-semibold mb-6">Your dog</h2>

          <label className="label-caps text-bark/60 block mb-3">Size</label>
          <div className="grid grid-cols-2 gap-2.5 mb-7">
            {SIZES.map((s) => (
              <button
                key={s.id}
                onClick={() => setSize(s.id)}
                className={`rounded-xl border p-3.5 text-left transition-colors ${
                  size === s.id
                    ? 'border-terracotta bg-[#f9ece6]'
                    : 'border-[#e0d4bc] hover:border-terracotta/50'
                }`}
              >
                <span className="font-semibold text-forest block">{s.label}</span>
                <span className="text-xs text-bark/60 leading-snug block mt-0.5">{s.weight}</span>
              </button>
            ))}
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <label className="label-caps text-bark/60">Years</label>
              <span className="font-display text-2xl font-semibold text-terracotta">{years}</span>
            </div>
            <input
              type="range" min={0} max={20} value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-terracotta"
            />
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="label-caps text-bark/60">Extra months</label>
              <span className="font-display text-2xl font-semibold text-terracotta">{months}</span>
            </div>
            <input
              type="range" min={0} max={11} value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-terracotta"
            />
          </div>
        </div>

        {/* Result */}
        <div className="bg-forest text-parch rounded-2xl p-8 text-center relative overflow-hidden md:sticky md:top-24">
          <span className="absolute -right-6 -bottom-8 opacity-10"><PawIcon className="w-36 h-36" /></span>
          <p className="label-caps text-tangerine relative">In human years, your dog is about</p>
          <p className="font-display text-8xl font-semibold my-4 text-parch relative">{result.human}</p>
          <span className="inline-block bg-tangerine text-forest label-caps px-4 py-2 rounded-full relative">
            {result.stage.label}
          </span>
          <p className="mt-5 text-parch/80 text-[15px] leading-relaxed relative">{result.stage.note}</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl bg-secondary border border-tangerine/40 p-5 text-[15px] text-forest/90 leading-relaxed">
        <strong>How it works:</strong> a dog's first year roughly equals 15 human years, the second
        adds about 9, and each year after adds 4–7 depending on size — small dogs age more slowly
        and live longer than giant breeds. This is an estimate, not a diagnosis; your vet knows
        your dog best.
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/articles/puppy-feeding-schedule-by-age" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          Puppy feeding schedule by age <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/tools/pet-cost-estimator" className="text-terracotta font-semibold inline-flex items-center gap-1.5">
          Try the pet cost estimator <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ToolShell>
  )
}
