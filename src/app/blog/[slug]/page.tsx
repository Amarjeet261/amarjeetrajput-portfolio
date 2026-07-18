import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.meta.title} | Blog`,
    description: post.meta.description,
  };
}

// Custom components for MDX
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold font-outfit mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold font-outfit mt-8 mb-4 text-primary" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold font-outfit mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-muted-foreground leading-relaxed mb-6 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6 glass-card p-4 rounded-r-lg" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[#1e1e1e] p-4 rounded-xl overflow-x-auto my-6 text-sm text-gray-300 border border-white/10" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-primary/20 text-primary px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <article className="pt-32 pb-16 flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {post.meta.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.meta.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.meta.readingTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6">
              {post.meta.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.meta.description}
            </p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-border shadow-2xl">
            <img src={post.meta.coverImage} alt={post.meta.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
