import { getProjects } from '@/lib/content/content-loader';
import ProjectCard from '@/components/projects/ProjectCard';

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: 'Projects | Backend Engineer Portfolio',
  description: 'Backend engineering projects showcasing API development, performance optimization, and scalable system design.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="container py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-text-secondary dark:text-text-secondary-dark">
            Backend engineering projects showcasing API development, performance optimization, 
            and scalable system design.
          </p>
        </header>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary dark:text-text-secondary-dark">
              No projects yet. Add some markdown files to <code className="px-2 py-1 bg-secondary dark:bg-secondary-dark rounded">content/projects/</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
