import Link from 'next/link';
import Image from 'next/image';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { format } from 'date-fns';
import { urlFor } from '@/sanity/lib/image';
import type { Post, PortableTextBlockType } from '@/types/sanity';
import { calculateReadTime } from './calculateReadTime';

// will contain the single blog post card 

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
      <article className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full">
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

export default BlogPostCard;
