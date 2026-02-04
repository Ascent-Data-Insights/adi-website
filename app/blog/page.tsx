import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Ascent Data Insights',
  description: 'Insights and thoughts on data, AI, and software engineering from the Ascent Data Insights team.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-100">
              Insights and thoughts on data, AI, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="font-heading text-3xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {post.author && (
                      <>
                        <span>•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-secondary hover:text-brand-accent font-medium inline-flex items-center group"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
