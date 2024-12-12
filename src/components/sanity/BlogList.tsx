'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/next-sanity-client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ] | order(publishedAt desc)[0...12] {
  _id, 
  title, 
  slug, 
  publishedAt, 
  mainImage, 
  author->{name, image}, 
  categories[]->{title}, 
  body 
}`;

const options = { next: { revalidate: 30 } };

export default function BlogList() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
      setPosts(fetchedPosts);

      const allCategories = fetchedPosts.flatMap(
        (post) => post.categories?.map((cat: { title: string }) => cat.title) || []
      );
      const uniqueCategories = ['All', ...new Set(allCategories)];
      setCategories(uniqueCategories);
    }

    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((post) =>
        post.categories?.some((cat: { title: string }) => cat.title === activeCategory)
      );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-y-4">
        {filteredPosts.map((post) => (
          <li
            className="hover:bg-gray-100 rounded-lg transition-colors duration-200"
            key={post._id}
          >
            <Link href={`/blogs/${post.slug.current}`} className="block p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : 'Unknown Date'}
              </p>
              {post.mainImage?.asset && (
                <Image
                  src={urlFor(post.mainImage.asset._ref).width(200).url() || ''}
                  alt={post.mainImage.alt || 'Post Image'}
                  width={200}
                  height={200}
                  className="mb-4 rounded-md"
                />
              )}
              <div>
                {post.author && (
                  <div className="flex items-center mb-2">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).width(40).height(40).url() || ''}
                        alt={post.author.name || 'Author Image'}
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                      />
                    )}
                    <span className="text-sm text-gray-700">{post.author.name}</span>
                  </div>
                )}
                {post.categories && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((category: { title: string }) => (
                      <span
                        key={category.title}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                {post.body && Array.isArray(post.body) && post.body[0]?.children && (
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {post.body[0]?.children[0]?.text || ''}...
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
