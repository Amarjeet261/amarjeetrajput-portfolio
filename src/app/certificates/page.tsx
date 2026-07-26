import { Navbar } from "@/components/Navbar";
import { Certificates } from "@/components/Certificates";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Certificates | Amarjeet Rajput",
  description: "View licenses and certifications.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <section className="pt-32 pb-16 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-4">
              Certifications & <span className="text-gradient">Licenses</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Verified certificates and achievements.
            </p>
          </div>
          <Certificates />
        </div>
      </section>
      <Footer />
    </main>
  );
}
