"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Globe, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Projects() {
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
            A selection of my best work. Click "Read More" to see the full case study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Globe size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <SiGithub size={20} />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <Link href={`/projects/${project.slug}`} className="mt-auto block">
                  <Button variant="default" className="w-full gap-2 rounded-xl group/btn">
                    Read More 
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
