import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | Sam Yoder',
  description: 'Thoughts, ideas, and creative explorations',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Blog
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          Thoughts, ideas, and creative explorations.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-500 italic">
            No posts yet. Check back soon!
          </p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <time className="text-sm text-zinc-500 dark:text-zinc-500">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
