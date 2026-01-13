export const metadata = {
  title: 'About | Sam Yoder',
  description: 'About me',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          About Me
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            {/* Add your intro here */}
            Hello! I'm Sam. Welcome to my corner of the internet.
          </p>

          <h2>What I Do</h2>
          <p>
            {/* Describe your creative work, interests, profession, etc. */}
            I enjoy making things and exploring new ideas.
          </p>

          <h2>Interests</h2>
          <ul>
            {/* Add your interests */}
            <li>Interest one</li>
            <li>Interest two</li>
            <li>Interest three</li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            {/* Add contact info or social links */}
            Feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
