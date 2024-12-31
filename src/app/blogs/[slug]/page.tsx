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
import { portableTextComponents } from '@/components/sanity/PortableTextComponents';
import ViewCounter from '@/components/sanity/ViewCounter';

type NextPageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    slug,
    body[]{
      ...,
      _type == "video" => {
        "videoUrl": videoFile.asset->url,
        caption,
        alt
      }
    },
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
    },
    viewCount
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
    <article className="min-h-screen bg-gradient-to-b from-sage-100 to-lime-200">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full">
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
                    className="px-4 py-1 text-xs font-medium bg-forest-900 border-2 bg-opacity-80 border-white text-sage-100 backdrop-blur-sm rounded-full group-hover:bg-lime-500 group-hover:text-forest-900 transition-colors duration-300"
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
                <ViewCounter postId={post._id} increment={true} />
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
          <PortableText 
            value={post.body} 
            components={portableTextComponents}
          />
        </div>

        {/* Share Section */}
        <div className="mt-16 border-t-2 border-forest-500/30">
          <div className="mx-auto max-w-3xl py-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-forest-900">Share this article</h3>
                <p className="mt-1 text-sm text-lime-700 font-medium">Help others discover this content</p>
              </div>
              <div>
                <ShareButtons 
                  title={post.title} 
                  url={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${post.slug.current}`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
