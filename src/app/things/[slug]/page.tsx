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
    <div className="min-h-screen bg-white dark:bg-black">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/things"
          className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 inline-block"
        >
          ← Back to things
        </Link>

        <header className="mb-12">
          <span className="text-sm text-zinc-500 dark:text-zinc-500 capitalize">
            {thing.type}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-2">
            {thing.title}
          </h1>
          {thing.description && (
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-4">
              {thing.description}
            </p>
          )}
          {thing.tags && thing.tags.length > 0 && (
            <div className="flex gap-2 mt-4">
              {thing.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {thing.link && (
            <a
              href={thing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              View project ↗
            </a>
          )}
        </header>

        {thing.content && (
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <MDXRemote source={thing.content} />
          </div>
        )}
      </article>
    </div>
  );
}
