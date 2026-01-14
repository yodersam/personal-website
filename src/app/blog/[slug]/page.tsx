import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Samuel Yoder`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to blog
        </Link>

        <header className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-text-muted">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-text-muted">·</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-text-muted mt-4 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-surface prose-pre:border prose-pre:border-border">
          <MDXRemote source={post.content} />
        </div>

        {/* Post footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
