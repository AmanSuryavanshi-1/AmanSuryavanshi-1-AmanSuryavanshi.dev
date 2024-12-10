import { NextPage } from 'next';
import { PortableText, type SanityDocument } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

const options = { next: { revalidate: 30 } };
interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  // const postImageUrl = post.mainImage.asset._ref
  //   ? urlFor(post.post.mainImage.asset._ref)?.width(550).height(310).url()
  //   : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {/* <img src={urlFor(post.mainImage.asset._ref).width(100).height(100).url()} /> */}
      {/* to convert img tag to next optimized Image tag we have to add images domain in next.config.js  */}
      <Image 
        src={urlFor(post.mainImage.asset._ref).width(100).height(100).url()} 
        alt={post.title} 
        width={100} 
        height={100} 
      />
      {/* {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )} */}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
};

export default PostPage;