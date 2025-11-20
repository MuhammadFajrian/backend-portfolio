import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card group hover:shadow-xl transition-all duration-300">
        <div className="card__body">
          <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark mb-3">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags.length > 0 && (
              <>
                <span>•</span>
                <span>{post.tags[0]}</span>
              </>
            )}
          </div>

          <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-text-secondary dark:text-text-secondary-dark line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary dark:bg-secondary-dark text-text dark:text-text-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
