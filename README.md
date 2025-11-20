# Backend Engineer Portfolio

Modern portfolio website for a Backend Engineer showcasing Java, TypeScript, Go, and PHP projects with API development, performance optimization, and scalable systems expertise.

## 🚀 Features

- **Dual Content Mode**: Support for both Markdown files and Notion API
- **Modern Stack**: Next.js 14 App Router with TypeScript
- **Dark Mode**: Automatic theme switching
- **SEO Optimized**: Pre-rendered pages with metadata
- **Performance**: Static Site Generation (SSG) with optional ISR
- **Responsive**: Mobile-first design

## 💻 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Markdown**: gray-matter + react-markdown
- **Notion**: @notionhq/client + notion-to-md
- **Syntax Highlighting**: highlight.js

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MuhammadFajrian/backend-portfolio.git
cd backend-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
backend-portfolio/
├── app/                      # Next.js app directory
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── projects/             # Projects pages
│   ├── blog/                 # Blog pages
│   └── about/                # About page
├── components/              # React components
│   ├── layout/              # Header, Footer, Nav
│   ├── ui/                  # UI components
│   ├── home/                # Home components
│   ├── projects/            # Project components
│   └── blog/                # Blog components
├── content/                 # Markdown content
│   ├── projects/            # Project markdown files
│   └── blogs/               # Blog markdown files
├── lib/                     # Utility functions
│   ├── content/             # Content loaders
│   ├── types.ts             # TypeScript types
│   └── utils.ts             # Utilities
└── public/                  # Static assets
```

## 📝 Content Management

### Mode A: Markdown Files (Default)

1. Set environment variable:
```bash
CONTENT_SOURCE=markdown
```

2. Create markdown files in:
   - `content/projects/` for projects
   - `content/blogs/` for blog posts

3. Example project file (`content/projects/my-project.md`):

```markdown
---
title: "My Awesome Project"
description: "A brief description"
date: "2024-11-20"
techStack:
  - "Java"
  - "Spring Boot"
  - "PostgreSQL"
painPoints:
  - "Problem 1"
  - "Problem 2"
solutions:
  - "Solution 1"
  - "Solution 2"
---

## Project Details

Your markdown content here...
```

### Mode B: Notion API

1. Create a Notion integration at [notion.so/my-integrations](https://www.notion.so/my-integrations)

2. Create two databases in Notion:
   - **Projects Database** with properties:
     - Name (Title)
     - Slug (Text)
     - Description (Text)
     - TechStack (Multi-select)
     - PainPoints (Text)
     - Solutions (Text)
     - Date (Date)
   
   - **Blogs Database** with properties:
     - Name (Title)
     - Slug (Text)
     - Excerpt (Text)
     - Tags (Multi-select)
     - Date (Date)

3. Share databases with your integration

4. Set environment variables:
```bash
CONTENT_SOURCE=notion
NOTION_API_KEY=your_secret_key
NOTION_PROJECTS_DB_ID=your_projects_db_id
NOTION_BLOGS_DB_ID=your_blogs_db_id
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Set environment variables in Vercel dashboard.

### Static Export

```bash
# Build static site
npm run build

# Output in /out directory
# Deploy to any static hosting
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#14b8a6',  // Your primary color
    dark: '#0d9488',
  },
}
```

### Content

- **Home**: Edit `components/home/HeroSection.tsx`
- **About**: Edit `app/about/page.tsx`
- **Footer**: Edit `components/layout/Footer.tsx`

## 📚 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 License

MIT License - feel free to use this portfolio template for your own projects.

## 👤 Author

**Muhammad Fajrian Eko Putra**
- GitHub: [@MuhammadFajrian](https://github.com/MuhammadFajrian)

---

Built with Next.js 14, TypeScript, and TailwindCSS
