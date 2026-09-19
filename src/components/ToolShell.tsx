import { useEffect } from 'react'
import { Link } from 'react-router'
import TornEdge from '../components/TornEdge'
import SEO, { BreadcrumbListSchema, SITE_URL, jsonLd } from '../components/SEO'

export default function ToolShell({
  kicker,
  title,
  intro,
  slug,
  keywords,
  children,
}: {
  kicker: string
  title: string
  intro: string
  slug: string
  keywords?: string
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${title} | Paws & Purpose`
  }, [title])

  const path = `/tools/${slug}`
  const fullUrl = `${SITE_URL}${path}`
  const breadcrumb = [
    { name: 'Home', url: SITE_URL },
    { name: 'Tools', url: `${SITE_URL}/tools` },
    { name: title, url: fullUrl },
  ]

  return (
    <div>
      <SEO title={title} description={intro} path={path} keywords={keywords} />
      {BreadcrumbListSchema(breadcrumb)}
      {jsonLd({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: title,
        description: intro,
        url: fullUrl,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      })}
      <section className="bg-forest text-parch">
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-16">
          <nav className="text-sm text-parch/60 mb-5 flex items-center gap-2">
            <Link to="/" className="hover:text-parch">Home</Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-parch">Tools</Link>
          </nav>
          <p className="label-caps text-tangerine mb-3">{kicker}</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-balance text-parch">{title}</h1>
          <p className="mt-4 text-parch/75 leading-relaxed max-w-2xl">{intro}</p>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>
      <div className="max-w-4xl mx-auto px-5 py-12">{children}</div>
    </div>
  )
}
