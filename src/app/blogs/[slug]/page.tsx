import { Any, PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/next-sanity-client";
import Link from "next/link";
import Image from "next/image";

interface Post {
  _type: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImageSource;
  publishedAt: string;
  body: Any[]; // You might want to type this more specifically based on your Portable Text structure
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// PortableText components configuration
const components = {
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
      const imageUrl = urlFor(value)?.width(800).height(400).url();
      if (!imageUrl) return null;
      return (
        <div className="relative w-full aspect-video my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog post image'}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      );
    },
  },
};

type Props = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  return client.fetch<Post>(POST_QUERY, { slug }, options);
}

export default async function PostPage({ params }: Props) {
  const { slug } = params;
  const post = await getPost(slug);
  
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
          <PortableText value={post.body} components={components} />
        )}
      </div>
    </main>
  );
}