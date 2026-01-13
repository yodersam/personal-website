import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Hey, I'm Samuel
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to my creative space. I enjoy making things and exploring new ideas.
            This is where I share my projects, thoughts, and whatever else I'm working on.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              View all →
            </Link>
          </div>

          {recentPosts.length === 0 ? (
            <p className="text-zinc-500 dark:text-zinc-500 italic">
              No posts yet. Check back soon!
            </p>
          ) : (
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <time className="text-sm text-zinc-500 dark:text-zinc-500">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mt-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
