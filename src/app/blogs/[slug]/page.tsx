import { Metadata } from "next";
import { client } from "@/sanity/next-sanity-client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
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
async function fetchPost(slug: string) {
  return client.fetch(POST_QUERY, { slug });
}

// Dynamic metadata for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = await fetchPost(slug);

  return {
    title: post?.title || "Blog Post",
    description: post?.body?.[0]?.children?.[0]?.text || "A detailed blog post.",
  };
}

// Page component
export default async function Page({ params, searchParams }: Props) {
  const { slug } = params;
  const post = await fetchPost(slug);

  if (!post) {
    return <h1 className="text-center text-xl mt-20">Post not found</h1>;
  }

  return (
    <article className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        Published on {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown Date"}
      </p>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage.asset._ref).url() || ""}
          alt={post.mainImage.alt || "Post Image"}
          width={800}
          height={400}
          className="rounded-md mb-6"
        />
      )}
      <div className="flex items-center mb-6">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(50).height(50).url() || ""}
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
          {post.categories.map((category: { title: string }) => (
            <span key={category.title} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">
              {category.title}
            </span>
          ))}
        </div>
      )}
      <div className="prose">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
