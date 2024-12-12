import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/next-sanity-client';

interface PageProps {
  params: { slug: string };
}

// Function to fetch post data
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage,
    publishedAt
  }`;
  return client.fetch(query, { slug });
}

// Metadata generation function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post?.title ?? 'Post not found',
  };
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <div className="relative aspect-video w-full">
          <Image
            src={postImageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-400">
          Published: {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={{}} />
        )}
      </div>
    </main>
  );
}
