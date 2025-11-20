import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, BlogPost } from '../types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const blogsDirectory = path.join(process.cwd(), 'content/blogs');

function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir);
}

export async function getMarkdownProjects(): Promise<Project[]> {
  const fileNames = ensureDirectoryExists(projectsDirectory);
  
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        techStack: data.techStack || [],
        painPoints: data.painPoints || [],
        solutions: data.solutions || [],
        architecture: data.architecture,
        date: data.date || new Date().toISOString(),
        content,
      };
    });

  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getMarkdownBlogs(): Promise<BlogPost[]> {
  const fileNames = ensureDirectoryExists(blogsDirectory);
  
  const blogs = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || content.slice(0, 150) + '...',
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        content,
      };
    });

  return blogs.sort((a, b) => (a.date > b.date ? -1 : 1));
}
