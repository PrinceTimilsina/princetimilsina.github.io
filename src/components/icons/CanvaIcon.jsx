// Canva has no icon in the simple-icons set this project ships with, so
// this is a small hand-built approximation of its circular gradient
// mark — not a pixel copy, just enough to read as "Canva" in a muted,
// grayscale-by-default logo strip.
export default function CanvaIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B3DFF" />
          <stop offset="55%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7CE0E3" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#canva-grad)" />
      <path
        d="M12.1 7.2c-2.87 0-5.1 2.2-5.1 4.98 0 2.9 2.16 4.9 4.66 4.9 1.3 0 2.28-.46 2.9-1.02.1-.1.16-.2.16-.35v-.6c0-.16-.13-.25-.28-.18-.6.32-1.34.55-2.2.55-1.72 0-2.9-1.24-2.9-3.24 0-1.95 1.24-3.36 2.87-3.36.66 0 1.1.18 1.36.4.15.13.2.28.2.5v2.36c0 .5-.24.78-.63.78-.3 0-.5-.16-.6-.5l-.1-.34c-.32.5-.85.86-1.5.86-1 0-1.7-.8-1.7-2.02 0-1.28.78-2.2 1.83-2.2.5 0 .87.2 1.1.5v-.3c0-.13.1-.22.24-.22h.9c.13 0 .23.1.23.23v3.87c0 .28.1.4.28.4.33 0 .6-.55.6-1.55 0-2.35-1.63-3.9-4.05-3.9Z"
        fill="#ffffff"
      />
    </svg>
  );
}
