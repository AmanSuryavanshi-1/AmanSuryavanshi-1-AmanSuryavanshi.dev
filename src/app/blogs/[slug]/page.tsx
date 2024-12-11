import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

type PostPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PostPage({
  params,
}: PostPageProps) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      <Image
        src={urlFor(post.mainImage.asset._ref).width(100).height(100).url()}
        alt={post.title}
        className="aspect-video rounded-xl"
        width={100}
        height={100}
      />

      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}

