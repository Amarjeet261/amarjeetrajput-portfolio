"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Built", value: 20, suffix: "+" },
  { label: "Technologies", value: 40, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "GitHub Stars", value: 500, suffix: "+" },
];

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationFrame: number;

    const animateCounts = () => {
      const duration = 2000;
      const start = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);

        setCounts(
          stats.map((stat) => Math.floor(stat.value * progress))
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounts();
        } else {
          cancelAnimationFrame(animationFrame);
          setCounts(stats.map(() => 0));
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-black/5 dark:bg-white/5"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Passionate Full Stack Developer creating modern, scalable and
            beautiful digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="space-y-10">

            <div className="relative w-72 h-72 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-3xl animate-pulse" />

              <Image
                src="/images/profile.jpeg"
                alt="Amarjeet"
                fill
                className="rounded-3xl object-cover border-4 border-primary shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="text-4xl font-bold text-primary">
                    {counts[index]}
                    {stat.suffix}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right */}

          <div className="space-y-7">

            <h3 className="text-4xl font-bold">
              Hello, I'm Amarjeet 👋
            </h3>

            <p className="text-lg leading-8 text-muted-foreground">
              I'm a passionate Full Stack Developer specializing in React,
              Next.js, Node.js, TypeScript, Tailwind CSS, Express.js and
              MongoDB. I enjoy building fast, scalable and visually appealing
              applications with modern technologies.
            </p>

            <p className="leading-8 text-muted-foreground">
              My focus is on creating seamless user experiences, writing clean
              maintainable code, and delivering high-quality products. I love
              learning new technologies and continuously improving my skills.
            </p>

            <div className="space-y-5 pt-4">

              <div className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <p>
                  <strong>Education:</strong> Bachelor of Computer Applications
                  (BCA), IGNOU
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <p>
                  <strong>Location:</strong> India 🇮🇳 (Open to Remote &
                  Relocation)
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />
                <p>
                  <strong>Status:</strong> Available for Full-Time Opportunities
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
