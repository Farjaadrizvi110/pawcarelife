import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { PawIcon } from './Icons'
import { COOKIE_CONSENT_KEY } from './AdSlot'

/**
 * GDPR/CCPA cookie consent banner.
 * Choice is stored in this browser's localStorage only (no server, no tracking).
 * Non-essential (advertising) cookies must only be activated after "Accept".
 * Accepting "all" injects the AdSense script and reloads once so ads start serving.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
        const t = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value: 'all' | 'essential') => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value)
    } catch {
      /* private mode — banner simply closes */
    }
    setVisible(false)
    if (value === 'all') {
      // Force a reload so adsbygoogle.js loads and AdSlots initialize cleanly
      setTimeout(() => window.location.reload(), 50)
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[80] p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-3xl mx-auto bg-white rounded-2xl border border-[#ece2cf] shadow-[0_20px_50px_-15px_rgba(26,61,46,0.35)] p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="flex items-start gap-3.5 flex-1">
          <span className="w-10 h-10 rounded-full bg-secondary text-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
            <PawIcon className="w-5 h-5" />
          </span>
          <p className="text-sm text-bark/80 leading-relaxed">
            We use cookies to keep the site working and — with your permission — to show
            personalized ads via Google AdSense, which funds animal rescue in Pakistan. Read our{' '}
            <Link to="/privacy" className="text-terracotta font-semibold underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2.5 flex-shrink-0">
          <button
            onClick={() => choose('essential')}
            className="px-5 py-2.5 rounded-full border border-[#d8c9a8] text-forest text-sm font-semibold hover:border-forest transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={() => choose('all')}
            className="px-5 py-2.5 rounded-full bg-forest text-parch text-sm font-semibold hover:bg-forest-mid transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
