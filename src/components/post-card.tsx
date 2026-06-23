import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group block rounded-2xl border border-border bg-card/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-card"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink group-hover:text-accent">
          {post.title}
        </h3>
        <time
          dateTime={post.date}
          className="shrink-0 font-mono text-xs text-ink-mute"
        >
          {formatDate(post.date)}
        </time>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{post.description}</p>
      {post.tags && post.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-bg-2 px-2 py-0.5 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
