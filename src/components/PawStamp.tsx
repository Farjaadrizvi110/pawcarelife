const PAW_PATH =
  'M12 13.2c-2.6 0-5.4 2.1-5.4 4.5 0 1.5 1.1 2.6 2.7 2.6 1 0 1.8-.4 2.7-.4s1.7.4 2.7.4c1.6 0 2.7-1.1 2.7-2.6 0-2.4-2.8-4.5-5.4-4.5zM6.6 8.6c-1.1-.3-2.4.7-2.8 2.2-.4 1.5.1 2.9 1.2 3.2 1.1.3 2.4-.7 2.8-2.2.4-1.5-.1-2.9-1.2-3.2zm10.8 0c-1.1.3-1.6 1.7-1.2 3.2.4 1.5 1.7 2.5 2.8 2.2 1.1-.3 1.6-1.7 1.2-3.2-.4-1.5-1.7-2.5-2.8-2.2zM9.4 3.9c-1.2.2-1.9 1.6-1.6 3.1.3 1.5 1.4 2.6 2.6 2.4 1.2-.2 1.9-1.6 1.6-3.1-.3-1.5-1.4-2.6-2.6-2.4zm5.2 0c-1.2-.2-2.3.9-2.6 2.4-.3 1.5.4 2.9 1.6 3.1 1.2.2 2.3-.9 2.6-2.4.3-1.5-.4-2.9-1.6-3.1z'

/** Circular passport-style stamp with orbiting text and a paw center */
export default function PawStamp({
  text = 'EVERY READER HELPS AN ANIMAL • PAWS & PURPOSE • ',
  size = 120,
  className = '',
}: {
  text?: string
  size?: number
  className?: string
}) {
  const id = `stamp-${size}-${text.length}`
  return (
    <div className={`stamp ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <defs>
          <path id={id} d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="#e89b50" strokeWidth="2" strokeDasharray="3 4" />
        <circle cx="60" cy="60" r="33" fill="none" stroke="#e89b50" strokeWidth="1.5" />
        <text fill="#e89b50" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="Figtree, sans-serif">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
        <g transform="translate(43.2 43.2) scale(1.4)" fill="#e89b50">
          <path d={PAW_PATH} />
        </g>
      </svg>
    </div>
  )
}
