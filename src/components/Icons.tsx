interface IconProps {
  className?: string
  strokeWidth?: number
}

export function PawIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 13.2c-2.6 0-5.4 2.1-5.4 4.5 0 1.5 1.1 2.6 2.7 2.6 1 0 1.8-.4 2.7-.4s1.7.4 2.7.4c1.6 0 2.7-1.1 2.7-2.6 0-2.4-2.8-4.5-5.4-4.5zM6.6 8.6c-1.1-.3-2.4.7-2.8 2.2-.4 1.5.1 2.9 1.2 3.2 1.1.3 2.4-.7 2.8-2.2.4-1.5-.1-2.9-1.2-3.2zm10.8 0c-1.1.3-1.6 1.7-1.2 3.2.4 1.5 1.7 2.5 2.8 2.2 1.1-.3 1.6-1.7 1.2-3.2-.4-1.5-1.7-2.5-2.8-2.2zM9.4 3.9c-1.2.2-1.9 1.6-1.6 3.1.3 1.5 1.4 2.6 2.6 2.4 1.2-.2 1.9-1.6 1.6-3.1-.3-1.5-1.4-2.6-2.6-2.4zm5.2 0c-1.2-.2-2.3.9-2.6 2.4-.3 1.5.4 2.9 1.6 3.1 1.2.2 2.3-.9 2.6-2.4.3-1.5-.4-2.9-1.6-3.1z" />
    </svg>
  )
}

export function DogIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 9c-1 2.5-.5 5 1 6.5V19a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.2c1.4-.7 2.3-2 2.3-3.8V9" />
      <path d="M4 9c0-2 1.5-3.5 3.5-3.5h6C16 41 18 6 18 8v1" transform="translate(0 1.5)" />
      <path d="M9 5.5C7.5 3.5 5 3 3.5 4c-.8.6-.5 2 .5 3M15 5.5C16.5 3.5 19 3 20.5 4c.8.6.5 2-.5 3" />
      <circle cx="9.2" cy="10" r="0.4" fill="currentColor" />
      <circle cx="14.8" cy="10" r="0.4" fill="currentColor" />
      <path d="M11 12.5h2l-.6 1.2a.7.7 0 0 1-1.2 0L11 12.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CatIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 10V4.5L9 7a8 8 0 0 1 6 0l4-2.5V10" />
      <path d="M5 10c0 5 3 9 7 9s7-4 7-9" />
      <circle cx="9.3" cy="11.5" r="0.4" fill="currentColor" />
      <circle cx="14.7" cy="11.5" r="0.4" fill="currentColor" />
      <path d="M11 14h2l-.6 1a.7.7 0 0 1-1.2 0L11 14z" fill="currentColor" stroke="none" />
      <path d="M2 12.5h3M2.5 15l2.7-.8M19 12.5h3M18.8 14.2l2.7.8" />
    </svg>
  )
}

export function HealthIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 20s-7-4.3-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.7 12 20 12 20z" />
      <path d="M8 12h2l1-2 1.5 4 1-2h2.5" />
    </svg>
  )
}

export function StreetIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20v-8l4-3v11M9 20V7l5 3.5V20M14 20v-7l5-2v9" />
      <path d="M6.5 13h.01M11.5 12h.01M11.5 15.5h.01M16.5 15h.01" />
    </svg>
  )
}

export function DonkeyIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 3L6.5 8M14 3l1.5 5" />
      <path d="M6.5 8C5 9.5 4.5 11 5 13l1.5 1c.3 1.5 1.5 2.5 3.5 2.5h3c2 0 3.5-1 4-2.5l1.5-1c.5-2 0-3.5-1.5-5" />
      <path d="M6.5 8c2-1.5 7-1.5 9 0" />
      <circle cx="9" cy="11" r="0.4" fill="currentColor" />
      <circle cx="14" cy="11" r="0.4" fill="currentColor" />
      <path d="M10 16.5V20M13.5 16.5V20" />
    </svg>
  )
}

export function ArrowRight({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function SearchIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function AlertIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3L2.5 20h19L12 3z" />
      <path d="M12 10v4M12 17.2h.01" />
    </svg>
  )
}

export function XIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function MenuIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CalculatorIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 7h7" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18.5h.01M12 18.5h.01M15.5 18.5h.01" />
    </svg>
  )
}

export function CoinIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M15 9.5c-.7-1-1.8-1.4-3-1.4-1.7 0-2.8.9-2.8 2.1 0 2.9 5.8 1.4 5.8 4.1 0 1.2-1.2 2.1-3 2.1-1.2 0-2.3-.5-3-1.4" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.1 3.63 8.1 8.1 0 4.48-3.63 8.12-8.06 8.12zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  )
}

export function BowlIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 11h16c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
      <path d="M9 8c0-1.2 1-1.3 1-2.5M13 8c0-1.2 1-1.3 1-2.5" />
    </svg>
  )
}
