import { useEffect } from 'react'
import TornEdge from '../components/TornEdge'
import SEO from '../components/SEO'
import { WhatsAppIcon, PawIcon } from '../components/Icons'
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '../components/WhatsAppButton'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact | Paws & Purpose'
  }, [])

  return (
    <div>
      <SEO
        title="Contact | Paws & Purpose"
        description="Get in touch with Syed Farjaad Raza Rizvi — reader questions, rescue collaborations, brand partnerships, and corrections welcome. Contact via WhatsApp (fastest reply) from Karachi, Pakistan."
        path="/contact"
        keywords="contact paws and purpose, animal rescue contact Pakistan, Farjaad WhatsApp, pet blog collaboration"
      />
      <section className="bg-forest text-parch">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-16 text-center">
          <p className="label-caps text-tangerine mb-3">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-balance text-parch">
            Let's talk animals
          </h1>
          <p className="mt-4 text-parch/75 leading-relaxed max-w-xl mx-auto">
            A question about an article, a rescue collaboration, a correction, or a brand
            partnership — every message is read personally.
          </p>
        </div>
        <TornEdge fill="#fcf9f3" />
      </section>

      <div className="max-w-2xl mx-auto px-5 py-14">
        <div className="rounded-3xl bg-white border border-[#ece2cf] p-8 md:p-10 text-center card-lift">
          <span className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#1eb856] flex items-center justify-center mx-auto mb-5">
            <WhatsAppIcon className="w-8 h-8" />
          </span>
          <h2 className="font-display text-2xl font-semibold text-forest">WhatsApp (fastest reply)</h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-display text-3xl font-semibold text-forest hover:text-terracotta transition-colors tracking-wide"
          >
            {WHATSAPP_DISPLAY}
          </a>
          <div className="mt-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1eb856] text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors shadow-[0_8px_20px_-6px_rgba(37,211,102,0.5)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Start a chat
            </a>
          </div>
          <p className="mt-6 text-sm text-bark/60 leading-relaxed">
            Usually replies within a day. Time zone: Pakistan Standard Time (GMT+5) — that's 4–5
            hours ahead of the UK and Europe, and 9–12 hours ahead of the US.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#faf5ea] border border-[#ece2cf] p-7 flex gap-4 items-start">
          <span className="w-10 h-10 rounded-full bg-forest text-parch flex items-center justify-center flex-shrink-0">
            <PawIcon className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-forest">Syed Farjaad Raza Rizvi</h3>
            <p className="text-sm text-bark/70 mt-1 leading-relaxed">
              Founder &amp; Editor, Paws &amp; Purpose · Karachi, Pakistan · Growth Engineer,
              Digital Marketer &amp; Animal Lover
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
