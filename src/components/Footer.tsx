import { Link } from 'react-router'
import { PawIcon } from './Icons'
import { CATEGORIES } from '../data/articles'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-parch/80">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-full bg-parch text-forest flex items-center justify-center">
              <PawIcon className="w-5 h-5" />
            </span>
            <span className="font-display font-semibold text-parch text-lg">
              Paws <span className="text-tangerine">&</span> Purpose
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-parch/70">
            Practical animal care guides written with love — and a mission. Together with
            its readers, this site supports food drives, TNVR initiatives, and shelter
            assistance for street dogs, cats, and working donkeys in Pakistan.
          </p>
          <p className="mt-5 text-xs text-parch/50 max-w-sm leading-relaxed">
            All health content is for informational purposes only and is not a substitute
            for professional veterinary advice. Always consult a qualified veterinarian.
          </p>
        </div>

        <div>
          <h4 className="label-caps text-tangerine mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/articles" className="hover:text-parch transition-colors">All Articles</Link></li>
            <li><Link to="/tools" className="hover:text-parch transition-colors">Free Tools</Link></li>
            <li><Link to="/tools/dog-age-calculator" className="hover:text-parch transition-colors">Dog Age Calculator</Link></li>
            <li><Link to="/tools/pet-cost-estimator" className="hover:text-parch transition-colors">Pet Cost Estimator</Link></li>
            <li><Link to="/tools/food-safety-checker" className="hover:text-parch transition-colors">Food Safety Checker</Link></li>
            <li><Link to="/about" className="hover:text-parch transition-colors">About & Mission</Link></li>
            <li><Link to="/contact" className="hover:text-parch transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label-caps text-tangerine mb-4">Topics</h4>
          <ul className="space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <Link to={`/articles?cat=${encodeURIComponent(c.name)}`} className="hover:text-parch transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-caps text-tangerine mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy" className="hover:text-parch transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-parch transition-colors">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:text-parch transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-parch/10">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-parch/50">
          <span>© {new Date().getFullYear()} Paws & Purpose. Every reader helps an animal.</span>
          <span className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-parch transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-parch transition-colors">Terms & Disclaimer</Link>
            <Link to="/contact" className="hover:text-parch transition-colors">Contact</Link>
          </span>
          <span className="flex items-center gap-1.5">
            Made with <PawIcon className="w-3.5 h-3.5 text-terracotta" /> in Karachi, Pakistan
          </span>
        </div>
      </div>
    </footer>
  )
}
