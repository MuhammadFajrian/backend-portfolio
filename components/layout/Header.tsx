import Navigation from './Navigation';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border dark:border-border-dark bg-background/95 dark:bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">MF</span>
          </a>
          <Navigation />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
