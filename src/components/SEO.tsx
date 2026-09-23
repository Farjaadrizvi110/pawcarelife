import { Helmet } from 'react-helmet-async'

export const SITE_URL = 'https://pawsandpurpose.com'
export const SITE_NAME = 'Paws & Purpose'
export const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`
export const AUTHOR_NAME = 'Syed Farjaad Raza Rizvi'

export interface MetaProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  keywords?: string
  noindex?: boolean
}

export function jsonLd(obj: unknown) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(obj)}
    </script>
  )
}

export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  keywords,
  noindex = false,
}: MetaProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content="#1a3d2e" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="google-site-verification" content="UBfUoZG1xfPxsq7_fzY8RVe3-RjA_RUwrIUQm2MIKQ4" />
    </Helmet>
  )
}

export function WebSiteSchema() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Practical dog, cat & donkey care guides, rescue stories, and free tools — supporting awareness for street animal welfare in Pakistan. Every reader helps an animal.',
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/articles?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  })
}

export function OrganizationSchema() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Practical animal care guides written with love — and a mission. Together with its readers, Paws & Purpose supports food drives, TNVR initiatives, and shelter assistance for street dogs, cats, and working donkeys in Pakistan.',
    sameAs: [
      `${SITE_URL}/about`,
      `${SITE_URL}/contact`,
    ],
  })
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbListSchema(items: BreadcrumbItem[]) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  })
}

export interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
  category: string
  keywords?: string[]
  mainEntityOfPage?: string
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName = AUTHOR_NAME,
  category,
  keywords,
  mainEntityOfPage,
}: ArticleSchemaProps) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? [image] : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    articleSection: category,
    keywords: keywords?.join(', '),
    mainEntityOfPage: mainEntityOfPage ? { '@type': 'WebPage', '@id': mainEntityOfPage } : undefined,
    inLanguage: 'en',
  })
}

export interface FAQItem {
  question: string
  answer: string
}

export function FAQPageSchema(faqs: FAQItem[]) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  })
}
