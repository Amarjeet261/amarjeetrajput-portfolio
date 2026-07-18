import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { projectsData } from "@/data/projects";

const baseUrl = "https://amarjeetrajput.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
    ...projectUrls,
  ];
}
