import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { calculateReadTime } from '@/components/sanity/calculateReadTime';
import { client } from '@/sanity/lib/client';
import type { Post } from '@/sanity/sanity';
import ShareButtons from '@/components/sanity/ShareButtons';

type NextPageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    slug,
    body,
    excerpt,
    mainImage,
    views,
    author->{
      _id,
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title
    }
  }`;

  try {
    const post = await client.fetch<Post>(query, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: `${post.title} | Aman Suryavanshi`,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  };
}

export default async function BlogPost({ params }: NextPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Blog post not found</h1>
      </div>
    );
  }

  const readTime = calculateReadTime(post.body);

  return (
    <article className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        {post.mainImage && (
          <>
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </>
        )}
        
        {/* Hero Content */}
        <div className="absolute bottom-0 w-full p-8 text-white">
          <div className="container mx-auto max-w-4xl">
            {post.categories && (
              <div className="mb-4 flex gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="rounded-full bg-forest-500 px-3 py-1 text-sm"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BiTime className="h-5 w-5" />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BsEye className="h-5 w-5" />
                <span>
                  {/* {post.views || 0} */}
                   28K views</span>
              </div>
              <time className="flex items-center gap-2">
                {format(new Date(post._createdAt), 'MMM dd, yyyy')}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Author Info */}
        {post.author && (
          <div className="mb-12 flex items-center gap-4">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{post.author.name}</h3>
              {post.author.bio && (
                <div className="text-gray-600 prose-sm">
                  <PortableText value={post.author.bio} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-forest-600 prose-strong:text-gray-900">
          <PortableText value={post.body} />
        </div>

        {/* Share Section */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">Share this post:</span>
            <ShareButtons 
              title={post.title} 
              url={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${post.slug.current}`} 
            />
          </div>
        </div>
      </div>
    </article>
  );
}
