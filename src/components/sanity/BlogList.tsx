'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import type { Post } from '@/types/sanity';
import FeaturedPost from './FeaturedPost';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { format } from 'date-fns';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Code, Briefcase, FileCode } from 'lucide-react';
import { calculateReadTime } from './calculateReadTime';

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

interface BlogPostCardProps {
  post: Post;
  priority?: boolean;
}

const extractTextFromBody = (body: any[] | undefined): string => {
  if (!body) return '';
  
  let text = '';
  body.forEach(block => {
    if (block && block._type === 'block' && Array.isArray(block.children)) {
      block.children.forEach((child: any) => {
        if (child && typeof child === 'object' && 'text' in child) {
          text += child.text + ' ';
        }
      });
    }
  });
  
  return text.trim().slice(0, 200) + (text.length > 200 ? '...' : '');
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, priority = false }) => {
  const readTime = calculateReadTime(post.body);
  
  return (
    <Link href={`/blogs/${post.slug.current}`} className="group">
      <article className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-4 left-4 flex gap-2">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="rounded-full bg-forest-900/80 px-3 py-1 text-xs text-white"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold text-forest-900 group-hover:text-lime-600">
            {post.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {post.excerpt}
          </p>
          <p className="mb-4 text-sm text-gray-500 line-clamp-4">
            {extractTextFromBody(post.body)}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              {post.author?.image && (
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span>{post.author?.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <BiTime className="h-4 w-4" />
                {readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <BsEye className="h-4 w-4" />
                {format(new Date(post._createdAt), 'MMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

const BlogPosts = ({ posts }: { posts: Post[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map(post => (
      <BlogPostCard key={post._id} post={post} />
    ))}
  </div>
);

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
    <div className="container mx-auto px-4 py-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <FeaturedPost post={featuredPost} />
        </div>
      )}

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="py-5 rounded-3xl bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 
           max-md:w-full max-md:min-h-[200px] max-md:flex max-md:flex-col max-md:justify-between max-md:gap-4 max-md:p-6
          max-[375px]:gap-2 max-[375px]:p-4">
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="all">
            <FileCode className="w-4 h-4 mr-2" />
            All Posts
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="work">
            <Briefcase className="w-4 h-4 mr-2" />
            Work
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="react">
            <Code className="w-4 h-4 mr-2" />
            React
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="javascript">
            <Code className="w-4 h-4 mr-2" />
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <BlogPosts posts={posts} />
        </TabsContent>

        <TabsContent value="work" className="mt-6">
          <BlogPosts posts={workPosts} />
        </TabsContent>

        <TabsContent value="react" className="mt-6">
          <BlogPosts posts={reactPosts} />
        </TabsContent>

        <TabsContent value="javascript" className="mt-6">
          <BlogPosts posts={javascriptPosts} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
