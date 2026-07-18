"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE_POSTS = [
  {
    slug: "building-premium-portfolio",
    title: "Building a Premium Portfolio with Next.js 16 and Three.js",
    date: "2026-07-18",
    category: "Next.js",
    description: "A step-by-step guide on creating a stunning, production-ready developer portfolio with 3D animations, glassmorphism, and a full MDX blog system.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    readingTime: "8 min read",
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript: Advanced Patterns for React Developers",
    date: "2026-06-25",
    category: "TypeScript",
    description: "Deep dive into advanced TypeScript patterns including discriminated unions, template literal types, and utility types that will elevate your React codebase.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    readingTime: "12 min read",
  },
  {
    slug: "docker-nextjs-deployment",
    title: "Deploying Next.js with Docker and CI/CD on Render",
    date: "2026-06-10",
    category: "DevOps",
    description: "Learn how to containerize your Next.js application with Docker and set up a fully automated CI/CD pipeline using GitHub Actions and Render.",
    coverImage: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=800&auto=format&fit=crop",
    readingTime: "10 min read",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Sharing knowledge through articles on web development, architecture, and engineering best practices.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="rounded-full gap-2 shrink-0">
              View All Posts <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {post.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
