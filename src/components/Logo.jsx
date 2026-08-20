export default function Logo({ size = 40, showWord = true, wordSize = 28 }) {
  return (
    <span className="logo" style={{ '--word': `${wordSize}px` }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.2" />
        <path d="M13 15l9 20 4-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 26c2-8 6-12 11-13-1 8-4 12-11 13z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M30 20c-1 3-2 5-4 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {showWord && <b>VisionIIM</b>}
    </span>
  );
}