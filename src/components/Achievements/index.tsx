"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";
import { Trophy, GitPullRequest, Zap, Star, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="text-yellow-400" size={28} />,
  GitPullRequest: <GitPullRequest className="text-blue-400" size={28} />,
  Zap: <Zap className="text-purple-400" size={28} />,
  Star: <Star className="text-orange-400" size={28} />,
  BookOpen: <BookOpen className="text-green-400" size={28} />,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions earned throughout my journey in tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                {iconMap[achievement.icon]}
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                {achievement.category}
              </span>
              <h3 className="font-bold text-lg font-outfit mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-3">{achievement.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
