import type { Post } from '@/types/sanity';
import BlogPostCard from './BlogPostCard';

interface BlogPostsProps {
  posts: Post[];
}
// will contain all the blog posts realted to specific category
const BlogPosts = ({ posts }: BlogPostsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 animate-fade-in">
    {posts.map((post, index) => (
      <BlogPostCard 
        key={post._id} 
        post={post} 
        priority={index < 6}
      />
    ))}
  </div>
);

export default BlogPosts;
