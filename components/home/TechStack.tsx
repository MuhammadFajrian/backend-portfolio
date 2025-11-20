const techStacks = [
  {
    category: 'Languages',
    items: ['Java', 'TypeScript', 'Go', 'PHP', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Quarkus', 'NestJS', 'Laravel', 'Express.js'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'REST APIs', 'GraphQL', 'Event-Driven', 'Clean Architecture'],
  },
];

export default function TechStack() {
  return (
    <section className="bg-surface dark:bg-surface-dark py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-teal-300 font-bold text-center mb-12">
            Tech Stack & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack) => (
              <div key={stack.category} className="space-y-3">
                <h3 className="font-semibold text-lg text-primary">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li 
                      key={item}
                      className="text-text-secondary dark:text-text-secondary-dark flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
