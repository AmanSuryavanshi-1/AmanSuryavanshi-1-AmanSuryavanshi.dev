// import { Metadata } from 'next';
// import { client } from "@/sanity/next-sanity-client";
// import Link from "next/link";
// import Image from "next/image";
// import { PortableText } from "next-sanity";

// // More precise type for Sanity post
// interface Post {
//   title: string;
//   mainImage?: {
//     asset: {
//       _ref: string;
//     };
//   };
//   publishedAt: string;
//   body: any[];
// }

// type PageProps = {
//   params: {
//     slug: string;
//   };
// }

// export default async function PostPage({ params }: PageProps) {
//   const post = await client.fetch<Post | null>(
//     `*[_type == "post" && slug.current == "${params.slug}"][0]`, 
//     {}, 
//     { next: { revalidate: 30 } }
//   );

//   if (!post) return <div>Post not found</div>;

//   return (
//     <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
//       <Link href="/" className="hover:underline">← Back to posts</Link>
//       {post.mainImage && (
//         <Image
//           src={urlFor(post.mainImage).width(800).height(400).url()}
//           alt={post.title || 'Post image'}
//           className="aspect-video rounded-xl object-cover"
//           width={800}
//           height={400}
//           priority
//         />
//       )}
//       <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
//       <div className="prose max-w-none">
//         <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
//         <PortableText value={post.body} />
//       </div>
//     </main>
//   );
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const post = await client.fetch<Post | null>(
//     `*[_type == "post" && slug.current == "${params.slug}"][0]`, 
//     {}, 
//     { next: { revalidate: 30 } }
//   );

//   return {
//     title: post?.title || 'Blog Post',
//     description: 'Blog post page'
//   };
// }

import { PortableText, type SanityDocument } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  // const postImageUrl = post.image
  //   ? urlFor(post.image)?.width(550).height(310).url()
  //   : null;

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
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}