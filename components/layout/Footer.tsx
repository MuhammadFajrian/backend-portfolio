export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-border-dark mt-16">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Muhammad Fajrian</h3>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
              Backend Engineer specializing in API development, performance optimization, and scalable systems.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects" className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/MuhammadFajrian" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border dark:border-border-dark text-center text-sm text-text-secondary dark:text-text-secondary-dark">
          <p>&copy; {currentYear} Muhammad Fajrian Eko Putra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
