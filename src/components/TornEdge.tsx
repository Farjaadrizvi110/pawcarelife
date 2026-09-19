interface TornEdgeProps {
  fill: string
  flip?: boolean
  className?: string
}

/** Hand-torn paper edge divider between sections */
export default function TornEdge({ fill, flip, className = '' }: TornEdgeProps) {
  return (
    <svg
      className={`torn ${className}`}
      viewBox="0 0 1440 42"
      preserveAspectRatio="none"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0,42 L0,26 C31,22 58,30 92,24 C121,19 150,9 184,15 C213,20 246,28 281,22 C311,17 340,6 372,12 C401,17 431,29 466,24 C497,20 522,10 556,14 C588,18 612,31 648,26 C681,22 706,8 740,13 C771,18 798,30 834,25 C866,21 892,9 926,14 C958,19 984,31 1020,26 C1053,22 1078,10 1112,15 C1143,20 1170,30 1206,25 C1238,21 1264,11 1298,16 C1329,21 1356,29 1390,24 C1408,21 1426,18 1440,20 L1440,42 Z"
      />
    </svg>
  )
}
