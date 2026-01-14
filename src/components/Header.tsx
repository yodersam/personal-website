'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/things', label: 'Things' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
            Samuel Yoder
          </span>
        </Link>
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all ${
                    isActive
                      ? 'text-accent font-medium bg-accent/10'
                      : 'text-text-muted hover:text-foreground hover:bg-surface-hover'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
