import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './Icons'

export const WHATSAPP_NUMBER = '923232212039'
export const WHATSAPP_DISPLAY = '+92 323 2212039'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Farjaad! I found Paws & Purpose and wanted to say hello.",
)}`

/** Floating WhatsApp chat button, visible on every page */
export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTip(true), 4000)
    const t2 = setTimeout(() => setShowTip(false), 11000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex items-center gap-3">
      <span
        className={`hidden sm:block bg-white text-forest text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-[#ece2cf] transition-all duration-500 ${
          showTip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        Questions about pet care? Chat with me
      </span>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] hover:scale-110 hover:shadow-[0_12px_32px_-6px_rgba(37,211,102,0.7)] transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
        <WhatsAppIcon className="w-7 h-7 relative" />
      </a>
    </div>
  )
}
