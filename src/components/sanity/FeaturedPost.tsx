import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { urlFor } from '@/sanity/lib/image';
import { PortableTextBlock, PortableTextSpan } from '@portabletext/types';
import type { Post } from '@/types/sanity';
import { calculateReadTime } from './calculateReadTime';

interface FeaturedPostProps {
    post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    if (!post) return null;
    
    const readTime = calculateReadTime(post.body);

    return (
        <Link href={`/blogs/${post.slug.current}`} className="group">
            <article className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                    {post.mainImage && (
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            priority={true}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                    
                    {/* Featured Tag */}
                    <div className="absolute top-4 right-4">
                        <span className="bg-lime-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                        </span>
                    </div>

                    {/* Categories */}
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

export default FeaturedPost;
