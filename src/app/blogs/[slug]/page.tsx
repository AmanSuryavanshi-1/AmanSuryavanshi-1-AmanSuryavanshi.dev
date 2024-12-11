import { PortableText } from "next-sanity";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Metadata } from 'next';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

interface Post {
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  body: any[];
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<Post>(POST_QUERY, params, options);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await client.fetch<Post>(POST_QUERY, params, options);
  
  return {
    title: post?.title || 'Blog Post',
    description: 'Blog post page'
  };
}

