import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] via-transparent to-[var(--gradient-end)] opacity-60" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 py-24">
          <div className="space-y-6">
            <p className="text-accent font-medium tracking-wide uppercase text-sm">
              Welcome
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Samuel
              </span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-xl">
              Welcome to my creative space. I enjoy making things and exploring new ideas.
              This is where I share my projects, thoughts, and whatever else I'm working on.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/things"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              >
                See my work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-foreground font-medium rounded-lg border border-border hover:bg-surface-hover hover:border-secondary/30 hover:text-secondary transition-all"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent posts section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Recent Posts
            </h2>
            <p className="text-text-muted mt-1">
              Thoughts and ideas I've been exploring
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            View all
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <div className="text-center py-12 bg-surface rounded-xl border border-border">
            <p className="text-text-muted italic">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group p-6 bg-surface rounded-xl border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <time className="text-sm text-text-muted">
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-text-muted line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 mt-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
