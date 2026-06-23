import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  body: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

async function readPostFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(POSTS_DIR);
    return entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

function parseFile(raw: string, filename: string): Post {
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;
  if (!fm.title || !fm.date || !fm.description) {
    throw new Error(
      `Post "${filename}" is missing required frontmatter (title, date, description).`,
    );
  }
  const slug = filename.replace(/\.mdx?$/, "");
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags,
    draft: fm.draft ?? false,
    body: content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readPostFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
      return parseFile(raw, file);
    }),
  );
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = await readPostFiles();
  const match = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!match) return null;
  const raw = await fs.readFile(path.join(POSTS_DIR, match), "utf8");
  return parseFile(raw, match);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
