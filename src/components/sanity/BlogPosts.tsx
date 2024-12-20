import type { Post } from '@/types/sanity';
import BlogPostCard from './BlogPostCard';

interface BlogPostsProps {
  posts: Post[];
}
// will contain all the blog posts related to specific category
const BlogPosts = ({ posts }: BlogPostsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-2 animate-fade-in">
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
