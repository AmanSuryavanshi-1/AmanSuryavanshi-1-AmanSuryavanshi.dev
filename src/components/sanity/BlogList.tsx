import { Metadata } from 'next';
import { client } from "@/sanity/next-sanity-client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";

// More precise type for Sanity post body
type PortableTextBlock = {
  _type: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}

interface Post {
  title: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  body: PortableTextBlock[];
}

type PageProps = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]`, 
    { slug }, 
    { next: { revalidate: 30 } }
  );

  if (!post) return <div>Post not found</div>;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">← Back to posts</Link>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).height(400).url()}
          alt={post.title || 'Post image'}
          className="aspect-video rounded-xl object-cover"
          width={800}
          height={400}
          priority
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose max-w-none">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        <PortableText value={post.body} />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]`, 
    { slug: params.slug }, 
    { next: { revalidate: 30 } }
  );

  return {
    title: post?.title || 'Blog Post',
    description: 'Blog post page'
  };
}