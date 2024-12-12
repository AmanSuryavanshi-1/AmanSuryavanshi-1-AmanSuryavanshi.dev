import { Metadata } from "next";
import { client } from "@/sanity/next-sanity-client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from 'next/navigation';
// import { SanityImageAsset } from '@sanity/image-url/lib/types/types';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Author {
  name: string;
  image: SanityImage;
}

interface Category {
  title: string;
}

interface Post {
  title: string;
  body: any[]; // This is typed as any[] because PortableText content is complex
  publishedAt: string;
  mainImage: SanityImage;
  author: Author;
  categories: Category[];
}

interface Props {
  params: { slug: string }
}

// Sanity query to fetch a single post
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  body,
  publishedAt,
  mainImage,
  author-> { name, image },
  categories[]-> { title }
}`;

// Fetch post data
async function fetchPost(slug: string): Promise<Post | null> {
  return client.fetch(POST_QUERY, { slug });
}

// PortableText components configuration
const components = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog post image'}
          width={800}
          height={400}
          className="my-8 rounded-md"
        />
      );
    },
  },
};

// Dynamic metadata for SEO
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await fetchPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title || "Blog Post",
    description: post.body?.[0]?.children?.[0]?.text || "A detailed blog post.",
  };
}

// Page component
export default async function Page({ params }: Props) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        Published on {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown Date"}
      </p>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.mainImage.alt || "Post Image"}
          width={800}
          height={400}
          className="rounded-md mb-6"
        />
      )}
      <div className="flex items-center mb-6">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(50).height(50).url()}
            alt={post.author.name || "Author Image"}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        )}
        <p className="text-gray-800">{post.author?.name}</p>
      </div>
      {post.categories && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category) => (
            <span key={category.title} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">
              {category.title}
            </span>
          ))}
        </div>
      )}
      <div className="prose max-w-none">
        <PortableText 
          value={post.body} 
          components={components}
        />
      </div>
    </article>
  );
}
