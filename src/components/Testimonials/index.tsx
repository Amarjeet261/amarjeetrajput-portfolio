"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleNav = (fn: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 6000);
  };

  const testimonial = testimonialsData[current];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, managers, and clients I've had the privilege of working with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-14 relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center">
            {/* Big quote icon */}
            <Quote className="absolute top-6 left-8 text-primary/10 w-24 h-24" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center z-10 relative"
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-primary/30 object-cover shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => handleNav(prev)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleNav(() => setCurrent(i))}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNav(next)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
