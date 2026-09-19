import { Link } from 'react-router'
import { ArrowRight } from './Icons'

/** E-E-A-T author card shown at the end of every article */
export default function AuthorBox() {
  return (
    <div className="my-12 rounded-2xl bg-white border border-[#ece2cf] p-6 sm:p-7 flex flex-col sm:flex-row gap-5 items-start">
      <span className="w-16 h-16 rounded-full bg-forest text-parch font-display text-xl font-semibold flex items-center justify-center flex-shrink-0">
        FR
      </span>
      <div>
        <p className="label-caps text-terracotta mb-1.5">Written by</p>
        <h3 className="font-display text-xl font-semibold text-forest">Syed Farjaad Raza Rizvi</h3>
        <p className="mt-2 text-[15px] text-bark/75 leading-relaxed">
          Growth engineer and digital marketer from Karachi, Pakistan — and a lifelong animal
          lover. Farjaad founded Paws &amp; Purpose to turn practical pet-care knowledge into
          real help for street dogs, cats, and working donkeys. Every guide is researched
          against veterinary sources and written to be genuinely useful.
        </p>
        <Link
          to="/about"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:gap-2.5 transition-all"
        >
          Read my story <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
