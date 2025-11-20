import { getBlog, getBlogs } from '@/lib/content/content-loader';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-text-secondary-dark mb-4">
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary dark:bg-secondary-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <MarkdownRenderer content={blog.content} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
