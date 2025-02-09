interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
