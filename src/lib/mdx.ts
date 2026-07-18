import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  coverImage: string;
  readingTime: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  return fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data as BlogPostMeta,
    content,
  };
}

export function getAllPosts(): { meta: BlogPostMeta; slug: string }[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  
  return posts;
}
