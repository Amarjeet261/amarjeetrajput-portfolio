"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { ExternalLink, MapPin, Briefcase, X } from "lucide-react";

export function Experience() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const openImage = (img: string) => setActiveImage(img);
  const closeImage = () => setActiveImage(null);

  return (
    <section id="experience" className="py-24 relative bg-blue-50/80 dark:bg-blue-950/20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-md overflow-hidden"
            >
              {/* Company Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-2">
                <h3 className="text-lg font-bold font-outfit text-foreground">
                  {exp.company}
                </h3>
                {exp.certificateImage ? (
                  <button
                    onClick={() => openImage(exp.certificateImage as string)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
                  >
                    Verify
                  </button>
                ) : exp.verifyUrl ? (
                  <a
                    href={exp.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                ) : null}
              </div>

              {/* Role Row */}
              <div className="px-6 pb-5">
                <div className="flex items-center gap-4 bg-muted/40 dark:bg-muted/20 rounded-xl p-4">
                  {/* Company Logo Placeholder */}
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                    <Briefcase size={20} />
                  </div>

                  {/* Role Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-base truncate">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="text-right shrink-0 hidden sm:block">
                    <div className="text-sm font-medium text-foreground">
                      {exp.duration}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      ({exp.durationShort})
                    </div>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="mt-4 space-y-2 px-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={`${tech}-${idx}`}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={closeImage}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground z-50"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <img
                src={activeImage}
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
