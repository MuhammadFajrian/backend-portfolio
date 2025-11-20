export const metadata = {
  title: 'About | Backend Engineer Portfolio',
  description: 'Learn more about my background as a backend engineer, experience, and technical expertise.',
};

export default function AboutPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              I'm a Backend Engineer specializing in building scalable, high-performance systems. 
              With expertise in Java, TypeScript, Go, and PHP, I focus on creating robust APIs, 
              optimizing system performance, and implementing clean architecture patterns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <ul className="space-y-3 text-text-secondary dark:text-text-secondary-dark">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <strong className="text-text dark:text-text-dark">API Development:</strong> Designing and implementing RESTful and GraphQL APIs
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <strong className="text-text dark:text-text-dark">Performance Optimization:</strong> Identifying bottlenecks and implementing solutions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <strong className="text-text dark:text-text-dark">System Architecture:</strong> Designing microservices and event-driven systems
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <div className="flex flex-col gap-3">
              <a 
                href="https://github.com/MuhammadFajrian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub: @MuhammadFajrian
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="text-primary hover:underline"
              >
                Email: your.email@example.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
