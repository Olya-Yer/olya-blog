import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-8">
      <div className="mx-auto max-w-3xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-ink-mute">
        <p>
          © {new Date().getFullYear()} {site.author}
        </p>
        <p className="font-mono text-xs">
          built with next.js · written in mdx
        </p>
      </div>
    </footer>
  );
}
