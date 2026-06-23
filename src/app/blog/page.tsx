import Link from "next/link";
import type { Metadata } from "next";
import { Brand } from "@/components/brand";
import { PostCard } from "@/components/post-card";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts and notes from Olya Yeritspokhyan.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <Link
            href="/"
            className="font-mono text-xs text-ink-mute hover:text-accent"
          >
            ← home
          </Link>
          <Brand size="sm" />
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-ink-soft">All posts, newest first.</p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/40 p-8 text-center">
            <p className="font-mono text-sm text-ink-mute">
              {"// no posts yet — check back soon"}
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
