import Link from 'next/link';
import { getAllThings, getAllTypes } from '@/lib/things';

export const metadata = {
  title: 'Things | Samuel Yoder',
  description: 'Projects, music, writing, and other creative work',
};

// Type icons for visual distinction
const typeIcons: Record<string, React.ReactNode> = {
  music: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  design: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  writing: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  comedy: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const defaultIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

export default function ThingsPage() {
  const things = getAllThings();
  const types = getAllTypes();

  const thingsByType = types.reduce((acc, type) => {
    acc[type] = things.filter((thing) => thing.type === type);
    return acc;
  }, {} as Record<string, typeof things>);

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--gradient-end)] to-transparent">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Things
          </h1>
          <p className="text-lg text-[var(--text-muted)]">
            Projects, music, writing, and other creative work.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {things.length === 0 ? (
          <div className="text-center py-16 bg-surface rounded-xl border border-[var(--border)]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-[var(--text-muted)]">
              Nothing here yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {types.map((type) => (
              <section key={type}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {typeIcons[type] || defaultIcon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground capitalize">
                    {type}
                  </h2>
                  <span className="text-sm text-[var(--text-muted)] bg-surface-hover px-2 py-0.5 rounded-full">
                    {thingsByType[type].length}
                  </span>
                </div>
                <ul className="grid gap-4">
                  {thingsByType[type].map((thing) => (
                    <li key={thing.slug}>
                      <Link
                        href={`/things/${thing.slug}`}
                        className="block group p-5 bg-surface rounded-xl border border-[var(--border)] hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              {thing.title}
                            </h3>
                            {thing.description && (
                              <p className="text-[var(--text-muted)]">
                                {thing.description}
                              </p>
                            )}
                            {thing.tags && thing.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-1">
                                {thing.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          {thing.link ? (
                            <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          ) : (
                            <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
