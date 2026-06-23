import { site } from "@/lib/site";

export function Brand({ size = "lg" }: { size?: "sm" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    lg: "text-3xl sm:text-4xl",
  };
  return (
    <h1
      className={`font-mono font-bold tracking-tight ${sizes[size]}`}
      aria-label={site.name}
    >
      <span className="text-accent font-medium">{"{"}</span>
      <span className="px-2">{site.name}</span>
      <span className="text-accent font-medium">{"}"}</span>
    </h1>
  );
}
