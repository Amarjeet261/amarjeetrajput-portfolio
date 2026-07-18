import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] font-bold font-outfit leading-none text-gradient opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-foreground font-outfit">Page Not Found</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for has drifted into the void. Let's get you back on track.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button className="rounded-full gap-2 px-6">
                <Home size={18} /> Back to Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full gap-2 px-6">
                <ArrowLeft size={18} /> Read the Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
