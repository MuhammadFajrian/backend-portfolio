import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative hero-bg">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-teal-300">
          Backend Engineer
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 dark:text-text-secondary-dark mb-8">
          Specializing in API development, performance optimization, and scalable systems
        </p>
        <p className="text-lg text-gray-400 dark:text-text-secondary-dark mb-10 max-w-2xl mx-auto">
          Building robust backend services with <span className="text-primary font-semibold">Java</span>,{' '}
          <span className="text-primary font-semibold">TypeScript</span>,{' '}
          <span className="text-primary font-semibold">Go</span>, and{' '}
          <span className="text-primary font-semibold">PHP</span>.
          Passionate about clean architecture, high-performance APIs, and solving complex technical challenges.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" href="/projects">
            View Projects
          </Button>
          <Button size="lg" variant="secondary" href="/about">
            About Me
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
