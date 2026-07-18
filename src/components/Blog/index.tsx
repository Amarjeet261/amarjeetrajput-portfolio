"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const SAMPLE_POSTS = [
  {
    slug: "building-premium-portfolio",
    title: "Building a Premium Portfolio with Next.js 16 and Three.js",
    date: "July 18, 2026",
    category: "Next.js",
    description: "A step-by-step guide on creating a stunning, production-ready developer portfolio with 3D animations, glassmorphism, and a full MDX blog system.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    readingTime: "8 min read",
    author: "Amarjeet Rajput",
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript: Advanced Patterns for React Developers",
    date: "June 25, 2026",
    category: "TypeScript",
    description: "Deep dive into advanced TypeScript patterns including discriminated unions, template literal types, and utility types that will elevate your React codebase.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    readingTime: "12 min read",
    author: "Amarjeet Rajput",
  },
  {
    slug: "docker-nextjs-deployment",
    title: "Deploying Next.js with Docker and CI/CD on Render",
    date: "June 10, 2026",
    category: "DevOps",
    description: "Learn how to containerize your Next.js application with Docker and set up a fully automated CI/CD pipeline using GitHub Actions and Render.",
    coverImage: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=800&auto=format&fit=crop",
    readingTime: "10 min read",
    author: "Amarjeet Rajput",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance: From Good to Blazing Fast",
    date: "May 28, 2026",
    category: "React",
    description: "Learn advanced performance optimization techniques including code splitting, lazy loading, memoization, and profiling to build ultra-fast React apps.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    readingTime: "15 min read",
    author: "Amarjeet Rajput",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Blogs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Thoughts on tech, coding, and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl overflow-hidden h-full flex flex-col border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 group">
                {/* Cover Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Date + Reading Time */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold font-outfit mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Author + Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                        AR
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
