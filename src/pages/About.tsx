import { useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import TornEdge from '../components/TornEdge'
import PawStamp from '../components/PawStamp'
import SEO, { SITE_URL } from '../components/SEO'
import { ArrowRight, PawIcon, DogIcon, CatIcon, DonkeyIcon, CalculatorIcon, WhatsAppIcon } from '../components/Icons'
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '../components/WhatsAppButton'
import aboutImg from '../assets/about.jpg'
import heroImg from '../assets/hero.jpg'
import donkeyImg from '../assets/donkey.jpg'

export default function About() {
  const { hash } = useLocation()
  useEffect(() => {
    document.title = 'About & Mission | Paws & Purpose'
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div>
      <SEO
        title="About & Mission | Paws & Purpose"
        description="Meet Farjaad — growth engineer, digital marketer, and animal lover from Karachi. Learn how Paws & Purpose turns every reader into real help for street dogs, cats, and working donkeys in Pakistan."
        path="/about"
        keywords="about paws and purpose, animal rescue mission Pakistan, Syed Farjaad Raza Rizvi, Karachi animal shelter, TNVR Pakistan"
        image={`${SITE_URL}/og-about.png`}
      />
      {/* Hero */}
      <section className="bg-forest text-parch">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-caps text-tangerine mb-4">About & mission</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-balance text-parch">
              Hi, I'm Farjaad
            </h1>
            <p className="mt-6 text-lg text-parch/80 leading-relaxed">
              Growth engineer, digital marketer, and animal lover from Karachi — using everything
              I know about technology and the internet for the animals who have no voice at all.
            </p>
          </div>
          <div className="relative">
            <div className="snap rotate-2 max-w-sm mx-auto">
              <img
                src={aboutImg}
                alt="Syed Farjaad Raza Rizvi with a street dog and cat in Karachi"
                className="rounded-sm aspect-[4/5] w-full"
                loading="lazy"
                width={500}
                height={625}
              />
            </div>
            <PawStamp className="absolute -bottom-6 -left-2 hidden sm:block" size={100} />
          </div>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-5 py-16 article-body">
        <h2 className="!mt-0">Why This Website Exists</h2>
        <p>
          I was born and raised in Karachi, Pakistan — a city of over 20 million people, and,
          quietly, home to millions of forgotten street animals: stray dogs sleeping on footpaths,
          cats searching for food in narrow lanes, and working donkeys carrying loads under the
          burning sun.
        </p>
        <p>
          By profession, I'm a Growth Engineer and Digital Marketer. I work with Meta Ads, Google
          Ads, and MERN-stack web development — in simple words, I build websites and help them
          grow. For years I used these skills for clients and businesses. Then I asked myself a
          harder question: <strong>What if I used everything I know for the animals who have no
          voice at all?</strong> This website is my answer.
        </p>
        <p>
          I can't rescue every animal myself. But I can do what I do best: build a bridge. This
          website connects you — a reader in Europe, the UK, the USA, or anywhere in the world —
          with the reality of animal care in Pakistan. Every article here is written to educate,
          to inspire compassion, and to show you exactly how small actions create real change for
          a dog in Karachi, a cat in Lahore, or a donkey at a brick kiln.
        </p>

        <h2 id="help">How This Website Helps Animals</h2>
        <p>
          This site is monetized through Google AdSense and reader support — and a portion of
          everything it earns goes directly toward animal welfare in Pakistan:
        </p>
        <ul>
          <li>Food for street dogs and cats</li>
          <li>Vaccination and neutering drives (TNVR)</li>
          <li>Support for local shelters and rescue workers doing the hardest work on the ground</li>
        </ul>
        <p>
          Transparency matters to me. As this project grows, I will publish updates showing exactly
          where the money goes — because if you trust this website with your time, you deserve to
          see the impact.
        </p>
      </section>

      {/* What you'll find */}
      <section className="bg-[#f7f1e3]">
        <TornEdge fill="#fcf9f3" flip className="bg-[#f7f1e3]" />
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-4xl font-semibold mb-10 text-center">What You'll Find Here</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <DogIcon className="w-7 h-7" />, title: 'Dog & Cat Care Guides', desc: 'Practical, vet-aware advice for pet owners everywhere.', to: '/articles?cat=Dog%20Care' },
              { icon: <DonkeyIcon className="w-7 h-7" />, title: 'Donkey & Working Animal Welfare', desc: 'The stories the world ignores.', to: '/articles?cat=Donkey%20Welfare' },
              { icon: <CatIcon className="w-7 h-7" />, title: 'Pakistan Animal Rescue', desc: 'Real shelters, real rescues, real ways to help.', to: '/articles?cat=Street%20Animals' },
              { icon: <CalculatorIcon className="w-7 h-7" />, title: 'Free Tools & Resources', desc: 'Simple tools I build myself to make animal care easier.', to: '/tools' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`card-lift bg-white rounded-2xl border border-[#ece2cf] p-6 ${i % 2 ? 'lg:translate-y-4' : ''}`}
              >
                <span className="w-12 h-12 rounded-full bg-secondary text-terracotta flex items-center justify-center mb-4">
                  {item.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-forest leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-bark/70 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="relative">
        <div className="grid grid-cols-2">
          <img
            src={heroImg}
            alt="Street animals of Karachi"
            className="w-full h-56 md:h-80 object-cover"
            loading="lazy"
            width={960}
            height={320}
          />
          <img
            src={donkeyImg}
            alt="A working donkey receiving care"
            className="w-full h-56 md:h-80 object-cover"
            loading="lazy"
            width={960}
            height={320}
          />
        </div>
        <div className="absolute inset-0 bg-forest/25" />
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <div className="rounded-3xl bg-white border border-[#ece2cf] p-8 md:p-10 text-center card-lift">
          <p className="label-caps text-terracotta mb-3">Get in touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
            Let's talk animals
          </h2>
          <p className="mt-4 text-bark/75 leading-relaxed max-w-xl mx-auto">
            Whether you're a reader with a question, a rescue looking to collaborate, or a brand
            that shares this mission — I'd genuinely love to hear from you.
          </p>
          <div className="mt-7 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#faf5ea] rounded-2xl px-7 py-5">
            <span className="label-caps text-bark/50">Phone / WhatsApp</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl font-semibold text-forest tracking-wide hover:text-terracotta transition-colors"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
          <div className="mt-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1eb856] text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors shadow-[0_8px_20px_-6px_rgba(37,211,102,0.5)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-bark/45">Syed Farjaad Raza Rizvi · Karachi, Pakistan</p>
        </div>
      </section>

      {/* One small request */}
      <section className="bg-forest text-parch">
        <TornEdge fill="#fcf9f3" className="bg-forest" />
        <div className="max-w-3xl mx-auto px-5 py-16 text-center">
          <PawIcon className="w-10 h-10 mx-auto text-tangerine mb-6" />
          <h2 className="font-display text-4xl font-semibold text-parch">One Small Request</h2>
          <p className="mt-5 text-lg text-parch/80 leading-relaxed">
            If an article here taught you something, share it. If a rescue story moved you, tell
            someone. Awareness travels further than money ever can.
          </p>
          <p className="mt-5 text-lg text-parch/80 leading-relaxed">
            Thank you for being here. Every visitor to this website is, quite literally, helping
            an animal in Pakistan.
          </p>
          <p className="mt-8 font-display text-xl text-tangerine">— Syed Farjaad Raza Rizvi</p>
          <p className="label-caps text-parch/50 mt-2">Growth Engineer · Digital Marketer · Animal Lover</p>
          <div className="mt-10">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream font-semibold uppercase tracking-wider text-sm px-8 py-3.5 rounded-full transition-colors"
            >
              Start reading <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
