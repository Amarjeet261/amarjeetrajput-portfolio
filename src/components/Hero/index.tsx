"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import * as THREE from "three";

function RotatingStars() {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0002;
      ref.current.rotation.y -= 0.0002;
    }
  });
  return (
    <group ref={ref}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
}

export function Hero() {
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 bg-background/90 dark:bg-background/40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <RotatingStars />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 overflow-hidden mb-8 shadow-2xl"
        >
          {/* Placeholder for Profile Image */}
          <div className="w-full h-full bg-linear-to-br from-primary to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
            AR
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tighter mb-4"
        >
          Hi, I'm <span className="text-gradient">Amarjeet Rajput</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-6"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-150 text-muted-foreground mb-8 text-sm md:text-base"
        >
          I build high-performance, scalable, and visually stunning web
          applications. Specializing in React, Next.js, and modern backend
          architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a href="/#contact" className="inline-block">
            <Button size="lg" className="rounded-full gap-2">
              Hire Me <ArrowRight size={18} />
            </Button>
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" download>
            <Button className="rounded-full gap-2 font-medium">
              <Download size={16} />
              Resume
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Amarjeet261"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amarjeetrajput261"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:amarjeetrajput326@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
