import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Globe, Code2, Server, LayoutDashboard } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Generate placeholder extensive details for demo purposes.
  // In a real scenario, this would come from the projectsData.
  const extensiveDetails = {
    overview: "This project represents a comprehensive solution designed to solve complex business logic while maintaining an elegant user interface. It leverages modern web technologies to deliver blazing fast performance and SEO optimization.",
    challenges: [
      "Integrating real-time data synchronization across multiple clients without performance bottlenecks.",
      "Designing a scalable database schema that supports complex nested queries.",
      "Implementing seamless authentication and authorization flows."
    ],
    solutions: [
      "Utilized WebSockets with Redis Pub/Sub for efficient real-time state management.",
      "Adopted Prisma ORM with PostgreSQL for strong typing and safe migrations.",
      "Integrated NextAuth for secure OAuth and JWT-based authentication."
    ],
    features: [
      "Real-time Dashboard Analytics",
      "Secure Role-Based Access Control",
      "Automated Email Notifications",
      "Responsive Glassmorphism UI",
      "Dark/Light Mode Support"
    ]
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={project.thumbnail} alt="Background" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Button className="rounded-full gap-2 px-6">
                      <Globe size={18} /> Live Demo
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="rounded-full gap-2 px-6">
                      <SiGithub size={18} /> View Source
                    </Button>
                  </a>
                )}
                
                <a href="/#contact" className="inline-block">
                  <Button variant="ghost" className="rounded-full gap-2 px-6">
                    Contact
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 glass-card p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Code2 className="text-primary" size={20} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-sm font-medium px-3 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="rounded-2xl overflow-hidden mb-16 border border-border shadow-2xl">
            <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold font-outfit mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {extensiveDetails.overview}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-outfit mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {extensiveDetails.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-outfit mb-6 flex items-center gap-3">
                  <Server className="text-primary" /> Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {extensiveDetails.challenges.map((challenge, i) => (
                    <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                      <h4 className="font-bold mb-2 text-foreground">Challenge:</h4>
                      <p className="text-muted-foreground mb-4">{challenge}</p>
                      <h4 className="font-bold mb-2 text-foreground">Solution:</h4>
                      <p className="text-muted-foreground">{extensiveDetails.solutions[i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <LayoutDashboard className="text-primary" size={20} /> Project Timeline
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">3 Months</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">My Role</p>
                    <p className="font-medium">Lead Full Stack Developer</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium text-green-500">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
