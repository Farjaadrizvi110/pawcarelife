import { useEffect, useMemo, useState } from 'react'

export const COOKIE_CONSENT_KEY = 'pp-cookie-consent'
export const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX'
export const ADSENSE_SLOT_DEFAULT = 'XXXXXXXXXX'

export function hasAdConsent() {
  if (typeof window === 'undefined') return false
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === 'all'
  } catch {
    return false
  }
}

export default function AdSlot({
  label = 'Advertisement',
  className = '',
  slot = ADSENSE_SLOT_DEFAULT,
  format = 'auto',
  fullWidth = true,
  style = {},
}: {
  label?: string
  className?: string
  slot?: string
  format?: string
  fullWidth?: boolean
  style?: React.CSSProperties
}) {
  const consented = useMemo(() => hasAdConsent(), [])
  const [inited, setInited] = useState(false)

  useEffect(() => {
    if (!consented) return
    // @ts-expect-error adsbygoogle injected by AdSense script
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    setInited(true)
  }, [consented])

  if (!consented) {
    return (
      <div
        className={`my-10 ${className}`}
        aria-label={label}
      >
        <p className="label-caps text-bark/35 text-center mb-2">{label}</p>
        <div className="rounded-xl border border-dashed border-[#d8c9a8] bg-[#faf5ea]/60 min-h-[110px] flex flex-col items-center justify-center px-5 text-center">
          <span className="text-sm text-bark/35">Your Google AdSense ad will appear here</span>
          <span className="text-xs text-bark/30 mt-1">
            Enable cookies &amp; personalized ads via the cookie banner to support this site.
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`my-10 ${className}`} aria-label={label}>
      <p className="label-caps text-bark/35 text-center mb-2">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
        data-inited={inited ? '1' : undefined}
      />
    </div>
  )
}
