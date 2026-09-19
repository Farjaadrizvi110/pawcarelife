import { useEffect } from 'react'
import { Link } from 'react-router'
import TornEdge from './TornEdge'
import SEO from './SEO'

export default function LegalShell({
  kicker,
  title,
  updated,
  path,
  description,
  children,
}: {
  kicker: string
  title: string
  updated: string
  path: string
  description: string
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${title} | Paws & Purpose`
  }, [title])

  return (
    <div>
      <SEO
        title={title}
        description={description}
        path={path}
        noindex
      />
      <section className="bg-forest text-parch">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-16">
          <nav className="text-sm text-parch/60 mb-5 flex items-center gap-2">
            <Link to="/" className="hover:text-parch">Home</Link>
            <span>/</span>
            <span className="text-parch/90">{title}</span>
          </nav>
          <p className="label-caps text-tangerine mb-3">{kicker}</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-balance text-parch">{title}</h1>
          <p className="mt-4 text-sm text-parch/60">Last updated: {updated}</p>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>
      <div className="max-w-3xl mx-auto px-5 py-12 article-body legal-body">{children}</div>
    </div>
  )
}
