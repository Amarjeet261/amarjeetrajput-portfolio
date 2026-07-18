"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import * as SiIcons from "react-icons/si";

// Helper to get icon component dynamically
const getIcon = (iconName: string) => {
  const IconComponent = (SiIcons as any)[iconName];
  return IconComponent || SiIcons.SiCodeigniter; // Fallback icon
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A summary of my core technical competencies and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`${category.cardClass} rounded-2xl p-6 transition-shadow duration-300 hover:shadow-lg`}
            >
              <h3
                className="text-lg font-bold mb-5 font-outfit"
                style={{ color: category.titleColor }}
              >
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 text-sm font-medium text-foreground shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Icon className="text-sm shrink-0" />
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
