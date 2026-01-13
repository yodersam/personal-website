import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getThingBySlug, getAllThingSlugs } from '@/lib/things';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllThingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const thing = getThingBySlug(slug);

  if (!thing) {
    return { title: 'Not Found' };
  }

  return {
    title: `${thing.title} | Samuel Yoder`,
    description: thing.description,
  };
}

export default async function ThingPage({ params }: Props) {
  const { slug } = await params;
  const thing = getThingBySlug(slug);

  if (!thing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/things"
          className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors mb-8"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to things
        </Link>

        <header className="mb-12 pb-8 border-b border-[var(--border)]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium capitalize">
              {thing.type}
            </span>
            {thing.tags && thing.tags.length > 0 && (
              <div className="flex gap-2">
                {thing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-surface-hover text-[var(--text-muted)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {thing.title}
          </h1>
          {thing.description && (
            <p className="text-xl text-[var(--text-muted)] mt-4 leading-relaxed">
              {thing.description}
            </p>
          )}
          {thing.link && (
            <a
              href={thing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              View project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </header>

        {thing.content && (
          <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-[var(--text-muted)] prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-surface prose-pre:border prose-pre:border-[var(--border)]">
            <MDXRemote source={thing.content} />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--border)]">
          <div className="flex items-center justify-between">
            <Link
              href="/things"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All things
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
