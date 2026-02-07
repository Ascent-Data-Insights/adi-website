import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Ascent Data Insights Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-200 hover:text-white mb-8 group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="font-heading text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-200">
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
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-brand max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]} // Add this line
              components={{
                h1: ({ children }: { children?: React.ReactNode }) => (
                  <h1 className="font-heading text-4xl font-bold text-brand-primary mb-6 mt-8">
                    {children}
                  </h1>
                ),
                h2: ({ children }: { children?: React.ReactNode }) => (
                  <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }: { children?: React.ReactNode }) => (
                  <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }: { children?: React.ReactNode }) => (
                  <p className="text-gray-700 leading-relaxed mb-6 text-xl">
                    {children}
                  </p>
                ),
                // Custom handler for the underline tag
                u: ({ children }: { children?: React.ReactNode }) => (
                  <u className="decoration-brand-secondary">
                    {children}
                  </u>
                ),
                a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
                  <a
                    href={href}
                    className="text-brand-secondary hover:text-brand-accent underline"
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }: { children?: React.ReactNode }) => (
                  <ul className="list-disc list-outside mb-4 mt-4 ml-6 space-y-2 text-gray-700 text-xl">
                    {children}
                  </ul>
                ),
                ol: ({ children }: { children?: React.ReactNode }) => (
                  <ol className="list-decimal list-outside mb-4 mt-4 ml-6 space-y-2 text-gray-700 text-xl">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }: { children?: React.ReactNode }) => (
                  <blockquote className="border-l-4 border-brand-secondary pl-4 italic text-gray-600 my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-gray-100 text-brand-primary px-1.5 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className={className}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }: { children?: React.ReactNode }) => (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
                table: ({ children }: { children?: React.ReactNode }) => (
                  <div className="my-6 w-full overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }: { children?: React.ReactNode }) => (
                  <thead className="bg-gray-50">
                    {children}
                  </thead>
                ),
                th: ({ children }: { children?: React.ReactNode }) => (
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 border-r border-gray-200 last:border-r-0">
                    {children}
                  </th>
                ),
                td: ({ children }: { children?: React.ReactNode }) => (
                  <td className="px-4 py-3 text-gray-700 border-r border-gray-200 last:border-r-0 border-t border-gray-200">
                    {children}
                  </td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-white bg-brand-secondary hover:bg-brand-accent rounded-lg font-semibold transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
