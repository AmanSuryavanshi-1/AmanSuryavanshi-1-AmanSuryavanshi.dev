'use client';

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import type { Post } from '@/types/sanity';
import FeaturedPost from './FeaturedPost';
import BlogTabs from './BlogTabs';

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc) {
  _id,
  _type,
  title,
  slug,
  _createdAt,
  _updatedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  excerpt,
  body,
  author->{
    _id,
    _type,
    name,
    image {
      asset->{
        _id,
        url
      }
    },
    bio
  },
  categories[]->{
    _id,
    _type,
    title,
    description
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
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!posts.length) {
    return <div className="min-h-screen flex items-center justify-center">No posts found.</div>;
  }

  const [featuredPost] = posts;

  // Helper function to check if a post belongs to a category
  const hasCategory = (post: Post, categoryName: string) => 
    post?.categories?.some(category => category?.title?.toLowerCase() === categoryName.toLowerCase());

  // Filter posts by category, including the featured post if it matches
  const getPostsByCategory = (categoryName: string) => {
    const categoryPosts = posts.filter(post => hasCategory(post, categoryName));
    return categoryPosts;
  };

  const workPosts = getPostsByCategory('work');
  const reactPosts = getPostsByCategory('react');
  const javascriptPosts = getPostsByCategory('javascript');

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {featuredPost && <FeaturedPost post={featuredPost} />}
        <BlogTabs
          posts={posts}
          workPosts={workPosts}
          reactPosts={reactPosts}
          javascriptPosts={javascriptPosts}
        />
      </div>
    </section>
  );
}
