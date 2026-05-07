interface DecorativeDividerProps {
  className?: string;
  width?: string;
}

export default function DecorativeDivider({
  className = "",
  width = "w-16",
}: DecorativeDividerProps) {
  return (
    <div
      className={`${width} h-px bg-linear-to-r from-transparent via-gold to-transparent ${className}`}
      role="separator"
    />
  );
}
