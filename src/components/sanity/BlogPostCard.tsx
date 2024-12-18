import Link from 'next/link';
import Image from 'next/image';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { format } from 'date-fns';
import { urlFor } from '@/sanity/lib/image';
import type { Post, PortableTextBlockType } from '@/types/sanity';
import { calculateReadTime } from './calculateReadTime';

interface BlogPostCardProps {
  post: Post;
  priority?: boolean;
}

const extractTextFromBody = (body: PortableTextBlockType[] | undefined): string => {
  if (!body) return '';
  
  let text = '';
  body.forEach(block => {
    if (block._type === 'block') {
      block.children.forEach((child) => {
        if (child._type === 'span' && child.text) {
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
      <article className="overflow-hidden rounded-3xl border-4 border-sage-100 bg-white backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4">
        <div className="relative h-60 w-full overflow-hidden">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage?.alt || post.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute z-10 top-3 right-3 flex gap-2">
              {post.categories.map(category => (
                <span
                  key={category._id}
                  className="px-3 py-1 text-xs font-medium bg-forest-900 border-2 bg-opacity-80 border-white text-sage-100 backdrop-blur-sm rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="p-6 space-y-4 h-[calc(100%-240px)]">
          <h2 className="text-xl font-semibold text-forest-900 group-hover:text-forest-700 transition-colors duration-300 line-clamp-1">
            {post.title}
          </h2>
          <p className="text-forest-700/80 text-sm line-clamp-6">
            {extractTextFromBody(post.body)}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-sage-300/20">
            <div className="flex items-center space-x-4 text-sm text-forest-700">
              <span className="flex items-center gap-1">
                <BiTime className="w-4 h-4" />
                {readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <BsEye className="w-4 h-4" />
                {/* {post.views || 0} views */} 200k Views
              </span>
            </div>
            <time className="text-sm text-forest-700">
              {format(new Date(post._createdAt), 'MMM dd, yyyy')}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;