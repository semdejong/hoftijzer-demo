export default function Zijstreep({
  className = "",
  draw = false,
}: {
  className?: string;
  draw?: boolean;
}) {
  return (
    <div
      className={`flex h-3 w-full flex-col ${draw ? "zijstreep-draw" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className="h-1 w-full bg-buspaars" />
      <span className="h-1 w-full bg-busoranje" />
      <span className="h-1 w-full bg-busgroen" />
    </div>
  );
}
