import { getProject, getProjects } from '@/lib/content/content-loader';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container py-16">
      <ProjectDetail project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
