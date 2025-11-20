import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { Project, BlogPost } from '../types';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const PROJECTS_DATABASE_ID = process.env.NOTION_PROJECTS_DB_ID || '';
const BLOGS_DATABASE_ID = process.env.NOTION_BLOGS_DB_ID || '';

export async function getNotionProjects(): Promise<Project[]> {
  if (!PROJECTS_DATABASE_ID) {
    console.warn('NOTION_PROJECTS_DB_ID not set, returning empty array');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: PROJECTS_DATABASE_ID,
      sorts: [{ property: 'Date', direction: 'descending' }],
    });

    const projects = await Promise.all(
      response.results.map(async (page: any) => {
        const mdBlocks = await n2m.pageToMarkdown(page.id);
        const content = n2m.toMarkdownString(mdBlocks);

        return {
          slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
          title: page.properties.Name?.title[0]?.plain_text || 'Untitled',
          description: page.properties.Description?.rich_text[0]?.plain_text || '',
          techStack: page.properties.TechStack?.multi_select.map((t: any) => t.name) || [],
          painPoints: page.properties.PainPoints?.rich_text[0]?.plain_text.split('\n') || [],
          solutions: page.properties.Solutions?.rich_text[0]?.plain_text.split('\n') || [],
          architecture: page.properties.Architecture?.url,
          date: page.properties.Date?.date?.start || new Date().toISOString(),
          content: content.parent,
        };
      })
    );

    return projects;
  } catch (error) {
    console.error('Error fetching Notion projects:', error);
    return [];
  }
}

export async function getNotionBlogs(): Promise<BlogPost[]> {
  if (!BLOGS_DATABASE_ID) {
    console.warn('NOTION_BLOGS_DB_ID not set, returning empty array');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: BLOGS_DATABASE_ID,
      sorts: [{ property: 'Date', direction: 'descending' }],
    });

    const blogs = await Promise.all(
      response.results.map(async (page: any) => {
        const mdBlocks = await n2m.pageToMarkdown(page.id);
        const content = n2m.toMarkdownString(mdBlocks);

        return {
          slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
          title: page.properties.Name?.title[0]?.plain_text || 'Untitled',
          excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
          date: page.properties.Date?.date?.start || new Date().toISOString(),
          tags: page.properties.Tags?.multi_select.map((t: any) => t.name) || [],
          content: content.parent,
        };
      })
    );

    return blogs;
  } catch (error) {
    console.error('Error fetching Notion blogs:', error);
    return [];
  }
}
