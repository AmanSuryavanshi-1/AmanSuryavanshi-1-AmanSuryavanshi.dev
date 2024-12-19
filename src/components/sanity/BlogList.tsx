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
  views,
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

  // Helper function to check if a post belongs to a category
  const hasCategory = (post: Post, categoryName: string) => 
    post?.categories?.some(category => category?.title?.toLowerCase() === categoryName.toLowerCase());

  // Filter posts by category, including the featured post if it matches
  const getPostsByCategory = (categoryName: string) => {
    const categoryPosts = posts.filter(post => hasCategory(post, categoryName));
    return categoryPosts;
  };

  // Get posts marked as featured
  const getFeaturedPosts = () => {
    const featured = posts.filter(post => hasCategory(post, 'featured'));
    return featured.slice(0, 3); // Limit to 3 featured posts
  };

  const featuredPosts = getFeaturedPosts();
  const projectPosts = getPostsByCategory('project');
  const reactPosts = getPostsByCategory('react');
  const javascriptPosts = getPostsByCategory('javascript');

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div id="featured">
          {featuredPosts.length > 0 && (
            <>
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-5xl font-bold text-forest-900">
                  Featured Posts
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-12 bg-lime-500 rounded-full"></div>
                  <div className="h-1 w-24 bg-lime-500 rounded-full"></div>
                  <div className="h-1 w-12 bg-lime-500 rounded-full"></div>
                </div>
              </div>
              <div className={`grid gap-6 ${
                featuredPosts.length === 1 ? 'grid-cols-1' : 
                featuredPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {featuredPosts.map((post, index) => (
                  <FeaturedPost 
                    key={post._id} 
                    post={post} 
                    isSingle={featuredPosts.length === 1} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <BlogTabs
          posts={posts}
          projectPosts={projectPosts}
          reactPosts={reactPosts}
          javascriptPosts={javascriptPosts}
        />
      </div>
    </section>
  );
}
