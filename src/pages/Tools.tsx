import { useEffect } from 'react'
import { Link } from 'react-router'
import TornEdge from '../components/TornEdge'
import SEO from '../components/SEO'
import { ArrowRight, CalculatorIcon, CoinIcon, BowlIcon } from '../components/Icons'

const TOOLS = [
  {
    to: '/tools/dog-age-calculator',
    icon: <CalculatorIcon className="w-8 h-8" />,
    color: '#c45c3e',
    soft: '#f7e3db',
    title: 'Dog Age Calculator',
    desc: 'The old "multiply by seven" rule is a myth. Convert your dog\'s age to human years the way vets actually estimate it — adjusted for size, because small dogs and giant breeds age very differently.',
    tag: 'dog age calculator · dog years to human years',
  },
  {
    to: '/tools/pet-cost-estimator',
    icon: <CoinIcon className="w-8 h-8" />,
    color: '#4a7a5c',
    soft: '#e2ede5',
    title: 'Monthly Pet Cost Estimator',
    desc: 'Thinking of getting a pet — or wondering where the money goes? Build an honest monthly budget covering food, vet care, grooming, insurance, and more in under a minute.',
    tag: 'cost of owning a dog · pet budget calculator',
  },
  {
    to: '/tools/food-safety-checker',
    icon: <BowlIcon className="w-8 h-8" />,
    color: '#e89b50',
    soft: '#fbeed9',
    title: '"Is This Food Safe for My Dog?" Checker',
    desc: 'Those eyes under the dinner table are hard to resist. Search 35+ common human foods and instantly see what\'s safe to share, what needs caution, and what\'s toxic.',
    tag: 'can dogs eat… · foods toxic to dogs',
  },
]

export default function Tools() {
  useEffect(() => {
    document.title = 'Free Pet Care Tools | Paws & Purpose'
  }, [])
  return (
    <div>
      <SEO
        title="Free Pet Care Tools | Paws & Purpose"
        description="Free, no-signup tools for pet owners: Dog Age Calculator (size-adjusted), Monthly Pet Cost Estimator, and Food Safety Checker for 35+ common human foods."
        path="/tools"
        keywords="dog age calculator, pet cost calculator, dog food checker, free pet tools, human foods dogs can eat, dog years to human years"
      />
      <section className="bg-forest text-parch">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-20">
          <p className="label-caps text-tangerine mb-4">Free tools & resources</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-balance text-parch">
            Simple tools, built by hand
          </h1>
          <p className="mt-5 text-lg text-parch/75 max-w-2xl leading-relaxed">
            No sign-ups, no downloads, no cost — just little helpers I build myself to make
            animal care easier for everyone.
          </p>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>

      <div className="max-w-4xl mx-auto px-5 py-14 space-y-6">
        {TOOLS.map((tool, i) => (
          <Link
            key={tool.to}
            to={tool.to}
            className={`card-lift group flex flex-col sm:flex-row gap-6 bg-white rounded-2xl border border-[#ece2cf] p-7 ${
              i % 2 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <span
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: tool.soft, color: tool.color }}
            >
              {tool.icon}
            </span>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold text-forest group-hover:text-terracotta transition-colors">
                {tool.title}
              </h2>
              <p className="mt-2.5 text-bark/75 leading-relaxed">{tool.desc}</p>
              <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-bark/50">{tool.tag}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                  Open tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
