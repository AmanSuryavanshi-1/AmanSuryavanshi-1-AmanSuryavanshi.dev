import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/next-sanity-client';
import type { Post } from '@/types/sanity';

type NextPageProps = {
  params: Promise<{ slug: string }>;
};

// Function to fetch post data
async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    body,
    mainImage,
    publishedAt,
    author->{
      _id,
      _type,
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      _type,
      title
    },
    excerpt
  }`;
  
  try {
    const post = await client.fetch<Post>(query, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Metadata generation function
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you\'re looking for doesn\'t exist.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our blog`,
    openGraph: post.mainImage ? {
      images: [{ url: urlFor(post.mainImage).width(1200).height(630).url() }],
    } : undefined,
  };
}

export default async function Page({ params }: NextPageProps): Promise<JSX.Element> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(675).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        href="/blogs" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to posts
      </Link>
      
      <article className="prose lg:prose-xl max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <span className="font-medium">{post.author.name}</span>
              </div>
            )}
            
            {post.publishedAt && (
              <time dateTime={post.publishedAt} className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span 
                    key={category._id}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {postImageUrl && (
          <figure className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={postImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        )}

        <div className="mt-8">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({children}) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
                ),
                h2: ({children}) => (
                  <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
                ),
                normal: ({children}) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
              },
              list: {
                bullet: ({children}) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
                ),
                number: ({children}) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
                ),
              },
              marks: {
                link: ({value, children}) => {
                  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                  return (
                    <a 
                      href={value?.href} 
                      target={target}
                      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {children}
                    </a>
                  );
                },
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
