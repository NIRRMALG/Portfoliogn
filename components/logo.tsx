export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF4DA6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill="url(#g)" />
      <path d="M18 44c6-8 22-8 28 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="36" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="18" fill="rgba(255,255,255,0.95)">NG</text>
    </svg>
  )
}
