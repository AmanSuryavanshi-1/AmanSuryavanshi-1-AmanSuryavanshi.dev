import type { Post } from '@/types/sanity';
import BlogPostCard from './BlogPostCard';

interface BlogPostsProps {
  posts: Post[];
}
// will contain all the blog posts realted to specific category
const BlogPosts = ({ posts }: BlogPostsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map(post => (
      <BlogPostCard key={post._id} post={post} />
    ))}
  </div>
);

export default BlogPosts;
