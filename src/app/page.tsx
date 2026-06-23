import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { Brand } from "@/components/brand";
import { SocialLinks } from "@/components/social-links";
import { PostCard } from "@/components/post-card";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-16 sm:py-24">
        <section className="flex flex-col items-center gap-6 text-center">
          <Avatar />
          <div className="space-y-2">
            <Brand />
            <p className="font-mono text-sm text-ink-mute italic">
              {site.tagline}
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            I&apos;m <strong className="text-ink">{site.author}</strong>, a senior
            mobile engineer with 6+ years building iOS and cross-platform apps
            in Swift, SwiftUI, and Flutter. Currently shipping field-service
            tools at{" "}
            <a
              href="https://symphony.is"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Symphony.is
            </a>
            . This is where I share notes from the trenches — mobile
            architecture, state management, and the small details that make
            apps feel alive.
          </p>

          <SocialLinks />
        </section>

        <section aria-labelledby="recent-posts">
          <div className="mb-5 flex items-baseline justify-between">
            <h2
              id="recent-posts"
              className="font-mono text-sm font-semibold tracking-wider text-ink-mute uppercase"
            >
              // recent posts
            </h2>
            {posts.length > 0 && (
              <Link
                href="/blog/"
                className="text-sm text-accent hover:underline"
              >
                all posts →
              </Link>
            )}
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/40 p-8 text-center">
              <p className="font-mono text-sm text-ink-mute">
                {"// no posts yet — first one is on its way"}
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
        </section>
      </main>
      <Footer />
    </>
  );
}
