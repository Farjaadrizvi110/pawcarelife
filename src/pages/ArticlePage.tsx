import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router'
import { getArticle, getRelated, VET_DISCLAIMER, categoryMeta } from '../data/articles'
import ArticleBody from '../components/ArticleBody'
import ArticleCard, { CategoryChip, CategoryIcon } from '../components/ArticleCard'
import AdSlot from '../components/AdSlot'
import AuthorBox from '../components/AuthorBox'
import TornEdge from '../components/TornEdge'
import SEO, {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
  SITE_URL,
  AUTHOR_NAME,
} from '../components/SEO'
import { AlertIcon, ArrowRight } from '../components/Icons'
import dogGrassImg from '../assets/dog-grass.jpg'
import donkeyImg from '../assets/donkey.jpg'

const IMAGES: Record<string, string> = {
  'dog-grass': dogGrassImg,
  donkey: donkeyImg,
}

const PUBLISHED = '2026-09-19'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug || '')

  useEffect(() => {
    window.scrollTo(0, 0)
    if (article) document.title = `${article.title} | Paws & Purpose`
  }, [slug, article])

  const pageUrl = article ? `${SITE_URL}/articles/${article.slug}` : SITE_URL
  const articleImage = article && article.image ? `${SITE_URL}/og-${article.slug}.png` : undefined

  const breadcrumb = useMemo(() => {
    if (!article) return null
    return [
      { name: 'Home', url: SITE_URL },
      { name: 'Articles', url: `${SITE_URL}/articles` },
      { name: article.category, url: `${SITE_URL}/articles?cat=${encodeURIComponent(article.category)}` },
      { name: article.title, url: pageUrl },
    ]
  }, [article, pageUrl])

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <SEO
          title="Article Not Found | Paws & Purpose"
          description="The article you were looking for doesn't exist or has been moved."
          path={`/articles/${slug}`}
          noindex
        />
        <h1 className="font-display text-4xl font-semibold mb-4">Article not found</h1>
        <p className="mb-8">This page may have wandered off like a curious cat.</p>
        <Link to="/articles" className="text-terracotta font-semibold">← Back to all articles</Link>
      </div>
    )
  }

  const meta = categoryMeta(article.category)
  const related = getRelated(article)
  const keywords = [article.keyword, article.category, ...article.faq.map((f) => f.q.slice(0, 40))]

  return (
    <article>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        type="article"
        image={articleImage}
        keywords={keywords.join(', ')}
      />
      {breadcrumb && BreadcrumbListSchema(breadcrumb)}
      {ArticleSchema({
        headline: article.title,
        description: article.excerpt,
        image: articleImage,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        authorName: AUTHOR_NAME,
        category: article.category,
        keywords,
        mainEntityOfPage: pageUrl,
      })}
      {FAQPageSchema(article.faq.map((f) => ({ question: f.q, answer: f.a })))}
      {/* Article hero */}
      <div className="bg-forest text-parch">
        <div className="max-w-3xl mx-auto px-5 pt-14 pb-20">
          <nav className="text-sm text-parch/60 mb-6 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-parch">Home</Link>
            <span>/</span>
            <Link to="/articles" className="hover:text-parch">Articles</Link>
            <span>/</span>
            <Link
              to={`/articles?cat=${encodeURIComponent(article.category)}`}
              className="hover:text-parch"
            >
              {article.category}
            </Link>
          </nav>
          <CategoryChip name={article.category} light />
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mt-5 text-balance text-parch">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-parch/70">
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-cream font-display font-semibold text-xs">
                FR
              </span>
              By <span className="text-parch font-medium">Syed Farjaad Raza Rizvi</span>
            </span>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
        <TornEdge fill="#fcf9f3" />
      </div>

      {/* Featured image */}
      {article.image && IMAGES[article.image] && (
        <div className="max-w-3xl mx-auto px-5 -mt-10 mb-4 relative z-10">
          <div className="snap rotate-1 max-w-2xl mx-auto">
            <img
              src={IMAGES[article.image]}
              alt={article.imageAlt}
              className="rounded-sm aspect-[3/2] w-full"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="max-w-3xl mx-auto px-5 py-12">
        <div className="article-body">
          {article.intro.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lg text-forest/90 font-medium' : ''}>{p}</p>
          ))}
        </div>

        {article.health && (
          <div className="my-8 rounded-xl bg-secondary border border-tangerine/40 p-5 flex gap-3.5">
            <AlertIcon className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
            <p className="text-[15px] text-forest/90 leading-relaxed">{VET_DISCLAIMER}</p>
          </div>
        )}

        <AdSlot />

        <ArticleBody sections={article.sections} />

        {/* Mission CTA — on every article, per the content bible */}
        <div className="my-12 rounded-2xl bg-forest text-parch p-8 relative overflow-hidden">
          <span className="absolute -right-8 -bottom-10 opacity-10 text-tangerine">
            <CategoryIcon icon={meta.icon} className="w-48 h-48" />
          </span>
          <h3 className="font-display text-2xl font-semibold text-parch relative">Enjoyed this guide?</h3>
          <p className="mt-3 text-parch/80 leading-relaxed relative max-w-xl">
            Explore more of our {article.category.toLowerCase()} articles — and learn about the
            mission of Paws &amp; Purpose: raising global awareness, educating pet owners, and
            shining a light on street dogs, cats, and working donkeys in Pakistan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 relative">
            <Link
              to="/about"
              className="bg-terracotta hover:bg-terracotta-dark text-cream text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Our Mission <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/articles"
              className="border border-parch/40 hover:border-parch text-parch text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>

        <AuthorBox />

        <AdSlot />

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {article.faq.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-[#ece2cf] overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 font-semibold text-forest hover:text-terracotta transition-colors">
                  {f.q}
                  <span className="text-terracotta text-xl leading-none group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="px-5 pb-5 text-bark/85 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#f7f1e3]">
          <TornEdge fill="#fcf9f3" flip className="bg-[#f7f1e3]" />
          <div className="max-w-6xl mx-auto px-5 py-14">
            <h2 className="font-display text-3xl font-semibold mb-8">Keep Reading</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
