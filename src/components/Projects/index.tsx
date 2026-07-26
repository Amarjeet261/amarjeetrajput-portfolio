"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Globe, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import * as SiIcons from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Helper to get icon component dynamically
const getIcon = (iconName: string) => {
  const IconComponent = (SiIcons as any)[iconName];
  return IconComponent || SiIcons.SiCodeigniter;
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full group">
                <div className="bg-card rounded-2xl overflow-hidden h-full flex flex-col border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Project Screenshot */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 font-outfit group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Icons Row */}
                    <div className="flex items-center gap-2 mb-5">
                      {project.techIcons.slice(0, 5).map((iconName, i) => {
                        const Icon = getIcon(iconName);
                        return (
                          <div
                            key={`${iconName}-${i}`}
                            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
                            title={project.technologies[i]}
                          >
                            <Icon className="text-base text-foreground/70" />
                          </div>
                        );
                      })}
                      {project.techIcons.length > 5 && (
                        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                          +{project.techIcons.length - 5}
                        </div>
                      )}
                    </div>

                    {/* Status + Links Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full">
                        <CheckCircle size={14} />
                        {project.status}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(project.githubUrl, "_blank");
                            }}
                            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          >
                            <SiGithub size={18} />
                          </span>
                        )}
                        {project.liveUrl && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(project.liveUrl, "_blank");
                            }}
                            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          >
                            <Globe size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
