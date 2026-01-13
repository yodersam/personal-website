import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | Samuel Yoder',
  description: 'Thoughts, ideas, and creative explorations',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--gradient-start)] to-transparent">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--text-muted)]">
            Thoughts, ideas, and creative explorations.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-surface rounded-xl border border-[var(--border)]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-[var(--text-muted)]">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block p-6 bg-surface rounded-xl border border-[var(--border)] hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <time className="text-sm text-[var(--text-muted)]">
                          {format(new Date(post.date), 'MMMM d, yyyy')}
                        </time>
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-[var(--text-muted)] line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {post.tags.map((tag) => (
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
                      <div className="shrink-0 mt-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
