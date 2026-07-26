"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificates";
import { Award, ExternalLink, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certificates() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openImage = (img: string) => setActiveImage(img);
  const closeImage = () => setActiveImage(null);

  return (
    <section id="certificates" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
           <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is part of my journey. Here are some of my verified achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden border-b border-border/50 bg-black/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Button size="icon" variant="secondary" className="rounded-full" onClick={() => openImage(cert.image)}>
                    <Download size={18} />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-primary shrink-0" size={20} />
                  <h3 className="text-lg font-bold font-outfit line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground font-medium mb-1">
                  {cert.organization}
                </p>
                <p className="text-sm text-muted-foreground/80 mb-6">
                  Issued: {cert.date}
                </p>

                <div className="w-full">
                  <Button
                    variant="outline"
                    className="w-full gap-2 rounded-xl group/btn"
                    onClick={() => openImage(cert.image)}
                  >
                    Verify Credential
                    <ExternalLink size={16} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </Button>
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
