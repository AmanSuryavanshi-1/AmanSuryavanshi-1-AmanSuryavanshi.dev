// import { Metadata } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
// import { PortableText } from '@portabletext/react';
// import { urlFor } from '@/sanity/lib/image';
// import { getPost } from '@/sanity/lib/getPost';

// interface PageProps {
//   params: { slug: string };
// }

// // Metadata generation function
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const post = await getPost(params.slug);
//   return {
//     title: post?.title ?? 'Post not found',
//   };
// }

// export default async function Page({ params }: PageProps): Promise<JSX.Element> {
//   const post = await getPost(params.slug);

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   const postImageUrl = post.mainImage
//     ? urlFor(post.mainImage)?.width(550).height(310).url()
//     : null;

//   return (
//     <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
//       <Link href="/" className="hover:underline">
//         ← Back to posts
//       </Link>
//       {postImageUrl && (
//         <div className="relative aspect-video w-full">
//           <Image
//             src={postImageUrl}
//             alt={post.title}
//             fill
//             className="object-cover rounded-xl"
//             priority
//           />
//         </div>
//       )}
//       <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
//       <div className="prose prose-lg max-w-none dark:prose-invert">
//         <p className="text-gray-600 dark:text-gray-400">
//           Published: {new Date(post.publishedAt).toLocaleDateString()}
//         </p>
//         {Array.isArray(post.body) && (
//           <PortableText value={post.body} components={{}} />
//         )}
//       </div>
//     </main>
//   );
// }

import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
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