import { getBlogs } from '@/lib/content/content-loader';
import BlogCard from '@/components/blog/BlogCard';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog | Backend Engineer Portfolio',
  description: 'Technical blog posts about backend development, API design, performance optimization, and software engineering best practices.',
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="container py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-text-secondary dark:text-text-secondary-dark">
            Technical articles about backend development, API design, performance optimization, 
            and software engineering best practices.
          </p>
        </header>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary dark:text-text-secondary-dark">
              No blog posts yet. Add some markdown files to <code className="px-2 py-1 bg-secondary dark:bg-secondary-dark rounded">content/blogs/</code>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {blogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
