import { getMarkdownProjects, getMarkdownBlogs } from './markdown';
import { getNotionProjects, getNotionBlogs } from './notion';
import { Project, BlogPost } from '../types';

const CONTENT_SOURCE = process.env.CONTENT_SOURCE || 'markdown';

export async function getProjects(): Promise<Project[]> {
  if (CONTENT_SOURCE === 'notion') {
    return getNotionProjects();
  }
  return getMarkdownProjects();
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug) || null;
}

export async function getBlogs(): Promise<BlogPost[]> {
  if (CONTENT_SOURCE === 'notion') {
    return getNotionBlogs();
  }
  return getMarkdownBlogs();
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find(b => b.slug === slug) || null;
}
