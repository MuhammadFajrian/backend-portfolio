export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  painPoints: string[];
  solutions: string[];
  architecture?: string;
  date: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}
