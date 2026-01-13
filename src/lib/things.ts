import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const thingsDirectory = path.join(process.cwd(), 'src/content/things');

export interface ThingMeta {
  slug: string;
  title: string;
  date: string;
  type: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
}

export interface Thing extends ThingMeta {
  content: string;
}

export function getAllThings(): ThingMeta[] {
  if (!fs.existsSync(thingsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(thingsDirectory);
  const things = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(thingsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        type: data.type || 'project',
        description: data.description || '',
        link: data.link,
        image: data.image,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return things;
}

export function getThingBySlug(slug: string): Thing | null {
  const mdxPath = path.join(thingsDirectory, `${slug}.mdx`);
  const mdPath = path.join(thingsDirectory, `${slug}.md`);

  let fullPath = '';
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    type: data.type || 'project',
    description: data.description || '',
    link: data.link,
    image: data.image,
    tags: data.tags || [],
    content,
  };
}

export function getAllThingSlugs(): string[] {
  if (!fs.existsSync(thingsDirectory)) {
    return [];
  }

  return fs.readdirSync(thingsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.mdx?$/, ''));
}

export function getThingsByType(type: string): ThingMeta[] {
  return getAllThings().filter((thing) => thing.type === type);
}

export function getAllTypes(): string[] {
  const things = getAllThings();
  const types = new Set(things.map((thing) => thing.type));
  return Array.from(types);
}
