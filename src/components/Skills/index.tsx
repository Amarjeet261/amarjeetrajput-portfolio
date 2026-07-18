"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import * as SiIcons from "react-icons/si";

// Helper to get icon component dynamically
const getIcon = (iconName: string) => {
  const IconComponent = (SiIcons as any)[iconName];
  return IconComponent || SiIcons.SiCodeigniter; // Fallback icon
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
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
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 font-outfit text-primary">
                {category.category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {category.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <Icon className="text-3xl text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-[10px] text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 bg-background px-2 py-1 rounded shadow-lg border border-border z-10 pointer-events-none">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
