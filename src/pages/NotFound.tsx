import { Link } from 'react-router'
import SEO from '../components/SEO'
import TornEdge from '../components/TornEdge'
import { PawIcon, ArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <div>
      <SEO
        title="Page Not Found | Paws & Purpose"
        description="The page you were looking for doesn't exist. Browse our articles, tools, and guides on dog care, cat care, and animal rescue in Pakistan."
        path="/404"
        noindex
      />
      <section className="bg-forest text-parch">
        <div className="max-w-4xl mx-auto px-5 pt-16 pb-24 text-center">
          <div className="relative inline-block">
            <span className="absolute -top-6 -right-10 rotate-12 hidden sm:block">
              <PawIcon className="w-20 h-20 text-tangerine/40" />
            </span>
            <p className="label-caps text-tangerine mb-5">Error 404</p>
            <h1 className="font-display text-6xl md:text-8xl font-semibold leading-none text-parch">
              Lost?
            </h1>
          </div>
          <p className="mt-6 text-xl text-parch/80 max-w-xl mx-auto leading-relaxed">
            This page wandered off like a curious cat. But everything else on Paws &amp; Purpose
            is right where you left it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/articles"
              className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Browse articles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="border border-parch/40 hover:border-parch text-parch font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Go home
            </Link>
          </div>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>

      <section className="max-w-4xl mx-auto px-5 py-16">
        <div className="rounded-3xl bg-white border border-[#ece2cf] p-8 md:p-10 card-lift">
          <h2 className="font-display text-3xl font-semibold text-forest">Try these instead</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-[17px]">
            <Link to="/articles/why-does-my-dog-eat-grass" className="flex items-center justify-between p-4 rounded-xl border border-[#ece2cf] hover:border-terracotta transition-colors">
              <span className="font-medium text-forest">Why does my dog eat grass?</span>
              <ArrowRight className="w-4 h-4 text-terracotta flex-shrink-0 ml-3" />
            </Link>
            <Link to="/articles/signs-your-cat-is-sick" className="flex items-center justify-between p-4 rounded-xl border border-[#ece2cf] hover:border-terracotta transition-colors">
              <span className="font-medium text-forest">10 early signs your cat is sick</span>
              <ArrowRight className="w-4 h-4 text-terracotta flex-shrink-0 ml-3" />
            </Link>
            <Link to="/tools/dog-age-calculator" className="flex items-center justify-between p-4 rounded-xl border border-[#ece2cf] hover:border-terracotta transition-colors">
              <span className="font-medium text-forest">Dog Age Calculator</span>
              <ArrowRight className="w-4 h-4 text-terracotta flex-shrink-0 ml-3" />
            </Link>
            <Link to="/tools/food-safety-checker" className="flex items-center justify-between p-4 rounded-xl border border-[#ece2cf] hover:border-terracotta transition-colors">
              <span className="font-medium text-forest">Dog Food Safety Checker</span>
              <ArrowRight className="w-4 h-4 text-terracotta flex-shrink-0 ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
