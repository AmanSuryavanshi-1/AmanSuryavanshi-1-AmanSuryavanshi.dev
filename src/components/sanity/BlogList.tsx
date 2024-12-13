'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/next-sanity-client';
import { urlFor } from '@/sanity/lib/image';
import type { Post } from '@/types/sanity';

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ] | order(publishedAt desc)[0...12] {
  _id,
  _type,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    _id,
    _type,
    name,
    image
  },
  categories[]->{
    _id,
    _type,
    title
  }
}`;

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<Post[]>(POSTS_QUERY);
        setPosts(fetchedPosts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          href={`/blogs/${post.slug.current}`}
          key={post._id}
          className="group hover:no-underline"
        >
          <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out group-hover:-translate-y-1">
            {post.mainImage && (
              <div className="relative h-48 w-full">
                <Image
                  src={urlFor(post.mainImage).width(400).height(300).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 line-clamp-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  {post.author?.image && (
                    <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={urlFor(post.author.image).width(50).height(50).url()}
                        alt={post.author.name || 'Author'}
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                  )}
                  <span>{post.author?.name || 'Anonymous'}</span>
                </div>
                {post.publishedAt && (
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                )}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
