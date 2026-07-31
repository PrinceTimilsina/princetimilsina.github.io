/**
 * Site-wide background: two soft, colorless gradient washes. No dot
 * grid, no particles here — those patterns read as generic/templated at
 * this scale. Kept deliberately quiet so it never competes with content.
 */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgb(var(--content) / 0.06), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 60%, rgb(var(--surface-soft) / 0.6) 100%)",
        }}
      />
    </div>
  );
}
