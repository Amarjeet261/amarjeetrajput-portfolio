"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in the tech industry, the roles I've held, and the impact I've made.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                  <Briefcase size={16} className="text-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-foreground font-outfit">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-muted-foreground mb-6">
                      {exp.company}
                    </h4>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
