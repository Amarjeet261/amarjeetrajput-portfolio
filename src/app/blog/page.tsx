import { getAllPosts } from "@/lib/mdx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Blog | Amarjeet Rajput",
  description: "Read my latest thoughts, tutorials, and insights on web development.",
};

export default function BlogListing() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-4">
              Writing & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Thoughts on software engineering, UI/UX design, and the tech industry.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No posts found. Check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.meta.coverImage} 
                        alt={post.meta.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {post.meta.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-2xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors">
                        {post.meta.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                        {post.meta.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {post.meta.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} /> {post.meta.readingTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
