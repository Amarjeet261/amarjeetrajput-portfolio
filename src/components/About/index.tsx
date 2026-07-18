"use client";

import { motion } from "framer-motion";
import { Trophy, GitPullRequest, Zap, Star, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="text-yellow-400" size={28} />,
  GitPullRequest: <GitPullRequest className="text-blue-400" size={28} />,
  Zap: <Zap className="text-purple-400" size={28} />,
  Star: <Star className="text-orange-400" size={28} />,
  BookOpen: <BookOpen className="text-green-400" size={28} />,
};

export function About() {
  const stats = [
    { label: "Projects Built", value: "20+" },
    { label: "Technologies", value: "40+" },
    { label: "Years Experience", value: "3+" },
    { label: "GitHub Stars", value: "500+" },
  ];

  return (
    <section id="about" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer crafting digital experiences with clean code and creative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Profile + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-7xl font-bold text-white shadow-2xl">
                AR
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-2xl -z-10 scale-110" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 rounded-xl text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-outfit">
              Hello! I'm Amarjeet 👋
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Full Stack Developer with 3+ years of experience building scalable, high-performance web applications. I specialize in React, Next.js, Node.js, and modern cloud infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm deeply passionate about crafting products that are not just functional, but truly delightful to use. My work spans from early-stage startups to enterprise-level applications.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-muted-foreground"><span className="text-foreground font-semibold">Education:</span> B.Tech in Computer Science & Engineering</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-muted-foreground"><span className="text-foreground font-semibold">Location:</span> India 🇮🇳 (Open to Remote & Relocation)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-muted-foreground"><span className="text-foreground font-semibold">Status:</span> Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
