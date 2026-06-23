import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <Link
            href="/blog/"
            className="font-mono text-xs text-ink-mute hover:text-accent"
          >
            ← all posts
          </Link>
          <time
            dateTime={post.date}
            className="font-mono text-xs text-ink-mute block"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg text-ink-soft">{post.description}</p>
        </header>

        <article className="prose prose-zinc dark:prose-invert prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:font-mono prose-code:before:content-none prose-code:after:content-none max-w-none">
          <MDXRemote
            source={post.body}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
