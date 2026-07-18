"use client";

import { motion } from "framer-motion";
import { Star, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { GitFork } from "lucide-react";

const featuredRepos = [
  {
    name: "next-portfolio-pro",
    description: "A premium, full-stack developer portfolio built with Next.js 16, Framer Motion, and Three.js.",
    stars: 247,
    forks: 53,
    language: "TypeScript",
    languageColor: "#3178c6",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "ai-saas-starter",
    description: "A production-ready AI SaaS boilerplate with auth, billing, and OpenAI integration.",
    stars: 189,
    forks: 41,
    language: "TypeScript",
    languageColor: "#3178c6",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "rtchat-realtime",
    description: "Real-time chat application with WebSockets, Redis Pub/Sub, and end-to-end encryption.",
    stars: 103,
    forks: 28,
    language: "JavaScript",
    languageColor: "#f1e05a",
    githubUrl: "https://github.com",
    liveUrl: null,
  },
];

const githubStatsUrl = (username: string) => `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=a1a1aa&title_color=a855f7&icon_color=a855f7&count_private=true`;

const username = "amarjeetrajput"; // placeholder

export function GithubSection() {
  return (
    <section id="github" className="py-24 bg-black/5 dark:bg-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My open-source contributions, projects, and daily development activity.
          </p>
        </motion.div>

        {/* GitHub Stats Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden p-4 flex items-center justify-center col-span-1"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=a1a1aa&title_color=a855f7&icon_color=a855f7`}
              alt="GitHub Stats"
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl overflow-hidden p-4 flex items-center justify-center col-span-1"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=a855f7&ring=a855f7&fire=a855f7&sideNums=a1a1aa&currStreakNum=a855f7&sideLabels=a1a1aa&currStreakLabel=a855f7&dates=a1a1aa`}
              alt="GitHub Streak"
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden p-4 flex items-center justify-center col-span-1"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&text_color=a1a1aa&title_color=a855f7`}
              alt="Top Languages"
              className="w-full"
            />
          </motion.div>
        </div>

        {/* Featured Repos */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold font-outfit mb-8">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-primary truncate">{repo.name}</h4>
                  <a href={repo.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                    <SiGithub size={18} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
                  </div>
                  {repo.liveUrl && (
                    <a href={repo.liveUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <Globe size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
