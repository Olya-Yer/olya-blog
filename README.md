# Curly Braces

Personal blog of [Olya Yeritspokhyan](https://www.linkedin.com/in/olya-yeritspokhyan/).

## Stack

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **MDX** (file-based posts via `next-mdx-remote` + `gray-matter`)
- **Static export** — outputs plain HTML/CSS/JS, deploys anywhere

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run lint
npm run build        # outputs static site to ./out
```

## Writing posts

Drop a new `.mdx` file in `content/posts/`. Required frontmatter:

```mdx
---
title: "My post title"
description: "One-sentence summary used in OG tags and the post list."
date: "2026-06-23"
tags: ["mobile", "swift"]   # optional
draft: false                 # optional, hides post if true
---

Body in **Markdown** or MDX.
```

Filename becomes the URL slug (`my-post.mdx` → `/blog/my-post/`).

## Deploy

The build outputs a fully static site to `./out`. Deploy that folder to:

- **Vercel** — `vercel --prod` (zero config, recommended)
- **Cloudflare Pages** — point at the repo, build cmd `npm run build`, output dir `out`
- **Netlify** — same as Cloudflare Pages
- **GitHub Pages** — push `out/` via Actions

## Structure

```
src/
├── app/
│   ├── layout.tsx             # root layout, metadata, fonts
│   ├── page.tsx               # home (hero + recent posts)
│   ├── globals.css            # tailwind + theme tokens
│   └── blog/
│       ├── page.tsx           # post list
│       └── [slug]/page.tsx    # single post (SSG)
├── components/                # avatar, brand, social-links, post-card, footer
└── lib/
    ├── posts.ts               # mdx loader + frontmatter
    └── site.ts                # name, tagline, social URLs
content/posts/                 # mdx posts
public/                        # static assets (profile.png, etc.)
```
