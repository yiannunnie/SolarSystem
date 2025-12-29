interface AudioIndicatorProps {
  isActive: boolean;
  bars?: number;
}

export const AudioIndicator = ({ isActive, bars = 4 }: AudioIndicatorProps) => {
  return (
    <>
      {Array.from({ length: bars }, (_, i) => i + 1).map((bar) => (
        <div
          key={bar}
          className={`indicator-line ${isActive ? "active" : ""}`}
          style={{ animationDelay: `${bar * 0.1}s` }}
        />
      ))}
    </>
  );
}
