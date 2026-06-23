import { site } from "@/lib/site";

type LinkItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
    />
  </svg>
);

const GitHubIcon = (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
    />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
    <path
      fill="currentColor"
      d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm10 9L2.4 6.4 2 6.7v.05L12 14l10-7.25V6.7l-.4-.3L12 13z"
    />
  </svg>
);

const items: LinkItem[] = [
  { href: site.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: site.links.github, label: "GitHub", icon: GitHubIcon },
  { href: `mailto:${site.email}`, label: "Email", icon: MailIcon },
];

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group inline-flex items-center gap-2 rounded-full bg-bg-2 px-4 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
        >
          <span className="transition-colors">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
