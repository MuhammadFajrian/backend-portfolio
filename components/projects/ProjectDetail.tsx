import { Project } from '@/lib/types';
import TechBadge from './TechBadge';
import MarkdownRenderer from '../blog/MarkdownRenderer';
import { formatDate } from '@/lib/utils';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-text-secondary dark:text-text-secondary-dark mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-text-secondary-dark mb-6">
          <time dateTime={project.date}>{formatDate(project.date)}</time>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </header>

      {project.painPoints && project.painPoints.length > 0 && (
        <section className="mb-8 p-6 bg-surface dark:bg-surface-dark rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Pain Points</h2>
          <ul className="space-y-2">
            {project.painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <span className="text-text-secondary dark:text-text-secondary-dark">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.solutions && project.solutions.length > 0 && (
        <section className="mb-8 p-6 bg-surface dark:bg-surface-dark rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Solutions & Critical Thinking</h2>
          <ul className="space-y-2">
            {project.solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span className="text-text-secondary dark:text-text-secondary-dark">{solution}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.architecture && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Architecture</h2>
          <img 
            src={project.architecture} 
            alt="Architecture diagram" 
            className="w-full rounded-lg border border-border dark:border-border-dark"
          />
        </section>
      )}

      <section className="prose dark:prose-invert">
        <MarkdownRenderer content={project.content} />
      </section>
    </article>
  );
}
