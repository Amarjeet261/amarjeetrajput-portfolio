import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Projects | Amarjeet Rajput",
  description: "View a curated selection of project work and case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <section className="pt-32 pb-16 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-4">
              Projects & <span className="text-gradient">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore the projects I have built, including websites, apps, and digital experiences.
            </p>
          </div>
          <Projects />
        </div>
      </section>
      <Footer />
    </main>
  );
}
