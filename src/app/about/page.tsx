export const metadata = {
  title: 'About | Samuel Yoder',
  description: 'About me',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page header with avatar */}
      <div className="border-b border-[var(--border)] bg-gradient-to-br from-[var(--gradient-start)] via-transparent to-[var(--gradient-end)]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-accent/25">
              S
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                About Me
              </h1>
              <p className="text-lg text-[var(--text-muted)] mt-2">
                Creator, maker, explorer of ideas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-[var(--text-muted)] prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
          <p className="text-xl leading-relaxed">
            Hello! I'm Samuel. Welcome to my corner of the internet.
          </p>

          <h2 className="flex items-center gap-3 !mt-12">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            What I Do
          </h2>
          <p>
            I enjoy making things and exploring new ideas.
          </p>

          <h2 className="flex items-center gap-3 !mt-12">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            Interests
          </h2>
          <ul className="space-y-2">
            <li>Interest one</li>
            <li>Interest two</li>
            <li>Interest three</li>
          </ul>

          <h2 className="flex items-center gap-3 !mt-12">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Get in Touch
          </h2>
          <p>
            Feel free to reach out.
          </p>

          {/* Social links section */}
          <div className="flex gap-4 mt-8 not-prose">
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-surface border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-surface border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-surface border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
