import Link from 'next/link';
import { getAllThings, getAllTypes } from '@/lib/things';

export const metadata = {
  title: 'Things | Samuel Yoder',
  description: 'Projects, music, writing, and other creative work',
};

export default function ThingsPage() {
  const things = getAllThings();
  const types = getAllTypes();

  const thingsByType = types.reduce((acc, type) => {
    acc[type] = things.filter((thing) => thing.type === type);
    return acc;
  }, {} as Record<string, typeof things>);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Things
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          Projects, music, writing, and other creative work.
        </p>

        {things.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-500 italic">
            Nothing here yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-12">
            {types.map((type) => (
              <section key={type}>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6 capitalize">
                  {type}
                </h2>
                <ul className="space-y-6">
                  {thingsByType[type].map((thing) => (
                    <li key={thing.slug}>
                      <Link
                        href={`/things/${thing.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                              {thing.title}
                            </h3>
                            {thing.description && (
                              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                                {thing.description}
                              </p>
                            )}
                            {thing.tags && thing.tags.length > 0 && (
                              <div className="flex gap-2 mt-2">
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
                          </div>
                          {thing.link && (
                            <span className="text-sm text-zinc-500 dark:text-zinc-500 shrink-0">
                              ↗
                            </span>
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
