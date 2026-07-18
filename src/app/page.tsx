import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Achievements } from "@/components/Achievements";
import { GithubSection } from "@/components/GithubSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/Blog";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Achievements />
      <GithubSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
