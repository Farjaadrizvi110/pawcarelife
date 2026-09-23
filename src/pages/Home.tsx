import { useEffect } from 'react'
import { Link } from 'react-router'
import { ARTICLES, CATEGORIES } from '../data/articles'
import ArticleCard, { CategoryIcon } from '../components/ArticleCard'
import AdSlot from '../components/AdSlot'
import TornEdge from '../components/TornEdge'
import PawStamp from '../components/PawStamp'
import SEO, { WebSiteSchema, OrganizationSchema, SITE_URL } from '../components/SEO'
import { ArrowRight, PawIcon, CalculatorIcon, CoinIcon, BowlIcon } from '../components/Icons'
import heroImg from '../assets/hero.jpg'
import aboutImg from '../assets/about.jpg'
import donkeyImg from '../assets/donkey.jpg'
import dogGrassImg from '../assets/dog-grass.jpg'

const TICKER = [
  'Dog & Cat Care Guides',
  'Donkey & Working Animal Welfare',
  'Pakistan Animal Rescue',
  'Free Tools & Resources',
  'Every Reader Helps an Animal',
]

export default function Home() {
  useEffect(() => {
    document.title = 'Paws & Purpose — Animal Care With a Mission'
  }, [])
  const featured = ARTICLES.find((a) => a.featured)!
  const latest = ARTICLES.filter((a) => !a.featured).slice(0, 6)
  const homeDesc = 'Paws & Purpose — practical dog, cat & donkey care guides, rescue stories, and free tools raising awareness for street animal welfare in Pakistan. Every reader helps an animal by reading and sharing.'
  const homeKeywords = 'dog care, cat care, donkey welfare, pet health, street animal rescue Pakistan, TNVR, pet care tips, vet advice, Karachi animal shelter'

  return (
    <div>
      <SEO
        title="Paws & Purpose — Animal Care With a Mission"
        description={homeDesc}
        path="/"
        keywords={homeKeywords}
        image={`${SITE_URL}/og-default.png`}
        type="website"
      />
      <WebSiteSchema />
      <OrganizationSchema />
      {/* ============ HERO ============ */}
      <section className="bg-forest text-parch relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-24 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="label-caps text-tangerine mb-5 flex items-center gap-2">
              <PawIcon className="w-4 h-4" /> Animal care with a mission
            </p>
            <h1 className="font-display text-5xl md:text-[64px] font-semibold leading-[1.05] text-balance text-parch">
              Every article you read helps an animal in{' '}
              <span className="text-tangerine">Pakistan</span>
            </h1>
            <p className="mt-6 text-lg text-parch/80 leading-relaxed max-w-lg">
              Practical, vet-aware guides for dog and cat lovers everywhere — raising awareness,
              building compassion, and shining a light on street dogs, cats, and working donkeys
              in Karachi and all across Pakistan.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/articles"
                className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                Start Reading <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="border border-parch/40 hover:border-parch text-parch font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Our Mission
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="snap rotate-2 relative z-10">
              <img
                src={heroImg}
                alt="A street dog, cat, and working donkey on a sunlit Karachi street"
                className="rounded-sm aspect-[16/10] w-full"
                loading="eager"
                width={800}
                height={500}
              />
            </div>
            <div className="snap -rotate-3 absolute -bottom-10 -left-4 w-40 hidden md:block z-20">
              <img
                src={aboutImg}
                alt="Farjaad with a street dog and cat"
                className="rounded-sm aspect-[4/5] w-full"
                loading="lazy"
                width={160}
                height={200}
              />
            </div>
            <PawStamp className="floaty absolute -top-10 right-6 z-20 hidden sm:block" size={110} />
          </div>
        </div>
        <TornEdge fill="#e89b50" />
      </section>

      {/* ============ TICKER ============ */}
      <div className="bg-tangerine text-forest overflow-hidden py-3.5 border-b border-forest/10">
        <div className="marquee-track flex whitespace-nowrap w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="label-caps flex items-center gap-6 px-6">
              {t} <PawIcon className="w-3.5 h-3.5" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ CATEGORIES ============ */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="label-caps text-terracotta mb-3">What you'll find here</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">
              Five topics, one promise:<br className="hidden md:block" /> kinder animal care
            </h2>
          </div>
          <Link to="/articles" className="text-terracotta font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            Browse all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => {
            const count = ARTICLES.filter((a) => a.category === cat.name).length
            return (
              <Link
                key={cat.name}
                to={`/articles?cat=${encodeURIComponent(cat.name)}`}
                className={`card-lift rounded-2xl p-5 border border-[#ece2cf] bg-white flex flex-col gap-3 ${
                  i % 2 ? 'md:translate-y-4' : ''
                }`}
              >
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: cat.soft, color: cat.color }}
                >
                  <CategoryIcon icon={cat.icon} className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-forest leading-tight">{cat.name}</h3>
                  <p className="text-xs text-bark/60 mt-1">{count} guides</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ============ FEATURED + LATEST ============ */}
      <section className="bg-[#f7f1e3]">
        <TornEdge fill="#fcf9f3" flip className="bg-[#f7f1e3]" />
        <div className="max-w-6xl mx-auto px-5 py-16">
          <p className="label-caps text-terracotta mb-3">From the blog</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-10 text-balance">
            Guides people are reading
          </h2>

          {/* Featured story — asymmetric editorial row */}
          <Link
            to={`/articles/${featured.slug}`}
            className="card-lift group grid md:grid-cols-5 bg-white rounded-2xl overflow-hidden border border-[#ece2cf] mb-10"
          >
            <div className="md:col-span-3 overflow-hidden">
              <img
                src={heroImgDog(featured)}
                alt={featured.imageAlt}
                className="w-full h-full object-cover aspect-[16/9] md:aspect-auto group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
                width={900}
                height={506}
              />
            </div>
            <div className="md:col-span-2 p-7 md:p-9 flex flex-col justify-center">
              <span className="label-caps text-terracotta mb-3">Featured guide</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug text-forest group-hover:text-terracotta transition-colors text-balance">
                {featured.title}
              </h3>
              <p className="mt-4 text-bark/75 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-mid text-parch font-semibold uppercase tracking-wider text-sm px-8 py-3.5 rounded-full transition-colors"
            >
              View all {ARTICLES.length} guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AdSlot className="max-w-3xl mx-auto" />
        </div>
      </section>

      {/* ============ MISSION BANNER ============ */}
      <section className="bg-forest text-parch relative">
        <TornEdge fill="#f7f1e3" className="bg-forest" />
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="snap -rotate-2">
              <img
                src={donkeyImg}
                alt="A working donkey being gently cared for at a brick kiln"
                className="rounded-sm aspect-[16/10] w-full"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
            <PawStamp
              text="HOPE • RESCUE • RECOVERY • HOPE • RESCUE • RECOVERY • "
              className="absolute -top-9 -right-3 hidden sm:block"
              size={100}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="label-caps text-tangerine mb-4">Why this website exists</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-balance text-parch">
              A bridge between your screen and their streets
            </h2>
            <p className="mt-6 text-parch/80 leading-relaxed">
              Pakistan's animals face a reality most of the world never sees: street dogs feared
              instead of helped, cats who never see a vet, and donkeys working through injuries
              a simple treatment could fix.
            </p>
            <p className="mt-4 text-parch/80 leading-relaxed">
              The mission of this website is simple: educate pet owners, surface the stories of
              animals the world usually overlooks, and build a global community of people who
              care more and know more about animal welfare.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-tangerine hover:bg-[#d8893c] text-forest font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <TornEdge fill="#fcf9f3" flip className="bg-forest" />
      </section>

      {/* ============ TOOLS ============ */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="label-caps text-terracotta mb-3">Free tools, built by hand</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">
            Little helpers for pet people
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              to: '/tools/dog-age-calculator',
              icon: <CalculatorIcon className="w-7 h-7" />,
              color: '#c45c3e',
              soft: '#f7e3db',
              title: 'Dog Age Calculator',
              desc: 'Convert dog years to human years — properly adjusted for your dog\'s size.',
            },
            {
              to: '/tools/pet-cost-estimator',
              icon: <CoinIcon className="w-7 h-7" />,
              color: '#4a7a5c',
              soft: '#e2ede5',
              title: 'Pet Cost Estimator',
              desc: 'What does a pet really cost per month? Build an honest budget in seconds.',
            },
            {
              to: '/tools/food-safety-checker',
              icon: <BowlIcon className="w-7 h-7" />,
              color: '#e89b50',
              soft: '#fbeed9',
              title: 'Food Safety Checker',
              desc: '"Can my dog eat this?" — check 35+ common foods instantly.',
            },
          ].map((tool, i) => (
            <Link
              key={tool.to}
              to={tool.to}
              className={`card-lift group bg-white rounded-2xl border border-[#ece2cf] p-7 text-center ${
                i === 1 ? 'md:-translate-y-3' : ''
              }`}
            >
              <span
                className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5"
                style={{ backgroundColor: tool.soft, color: tool.color }}
              >
                {tool.icon}
              </span>
              <h3 className="font-display text-xl font-semibold text-forest group-hover:text-terracotta transition-colors">
                {tool.title}
              </h3>
              <p className="mt-2.5 text-[15px] text-bark/70 leading-relaxed">{tool.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                Try it free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="max-w-4xl mx-auto px-5 pb-20">
        <div className="rounded-3xl bg-terracotta text-cream px-8 py-14 md:px-16 text-center relative overflow-hidden">
          <span className="absolute -left-8 -top-10 opacity-15 rotate-12"><PawIcon className="w-40 h-40" /></span>
          <span className="absolute -right-6 -bottom-12 opacity-15 -rotate-12"><PawIcon className="w-44 h-44" /></span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance relative">
            One small request
          </h2>
          <p className="mt-4 text-cream/90 leading-relaxed max-w-xl mx-auto relative">
            If an article here taught you something, share it. If a rescue story moved you, tell
            someone. Awareness and compassion are the most powerful tools we have.
          </p>
          <Link
            to="/articles"
            className="mt-8 inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-parch font-semibold uppercase tracking-wider text-sm px-8 py-3.5 rounded-full transition-colors relative"
          >
            Keep exploring <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function heroImgDog(article: { image?: string }) {
  return article.image === 'dog-grass' ? dogGrassImg : donkeyImg
}
