import Link from 'next/link';
import { Project } from '@/lib/types';
import TechBadge from './TechBadge';
import { formatDate } from '@/lib/utils';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card group hover:shadow-xl transition-all duration-300 h-full">
        <div className="card__body">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex-1">
              {project.title}
            </h3>
            <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
              {formatDate(project.date)}
            </span>
          </div>
          
          <p className="text-text-secondary dark:text-text-secondary-dark mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-text-secondary dark:text-text-secondary-dark self-center">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {project.painPoints && project.painPoints.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border dark:border-border-dark">
              <p className="text-sm font-medium mb-2">Key Challenge:</p>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark line-clamp-2">
                {project.painPoints[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
