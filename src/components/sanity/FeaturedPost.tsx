import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { urlFor } from '@/sanity/lib/image';
import type { Post, PortableTextBlockType } from '@/types/sanity';
import { calculateReadTime } from './calculateReadTime';

interface FeaturedPostProps {
    post: Post;
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

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    if (!post) return null;
    
    const readTime = calculateReadTime(post.body);

    return (
        <Link href={`/blogs/${post.slug.current}`} className="group block mb-8">
            <article className="relative overflow-hidden rounded-xl bg-white/5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full">
                    {post.mainImage && (
                        <>
                            {/* Main Image */}
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.mainImage?.alt || post.title}
                                fill
                                priority={true}
                                className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/50 to-forest-900/20"></div>
                        </>
                    )}

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 bg-lime-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-900 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-900"></span>
                            </span>
                            <span className="text-forest-900 font-medium text-xs">Featured</span>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                        <div className="space-y-4">
                            {/* Categories */}
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.categories.map(category => (
                                        <span
                                            key={category._id}
                                            className="px-2.5 py-1 text-xs font-medium bg-sage-100/80 text-forest-900 
                                                     backdrop-blur-sm rounded-full"
                                        >
                                            {category.title}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            {/* Title & Description */}
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-sage-100 group-hover:text-lime-500 
                                             transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h2>
                                
                                <p className="text-sage-300 text-sm md:text-base line-clamp-2">
                                    {extractTextFromBody(post.body)}
                                </p>
                            </div>
                            
                            {/* Metadata */}
                            <div className="flex items-center justify-between pt-4 border-t border-sage-300/10">
                                <div className="flex items-center space-x-4">
                                    <span className="flex items-center gap-1.5 text-sage-300">
                                        <BiTime className="w-4 h-4" />
                                        <span className="text-xs">{readTime} min read</span>
                                    </span>
                                    <span className="flex items-center gap-1.5 text-sage-300">
                                        <BsEye className="w-4 h-4" />
                                        {/* <span className="text-xs">{post.views || 0} views</span> */}
                                    </span>
                                </div>
                                <time className="text-sage-300 text-xs">
                                    {format(new Date(post._createdAt), 'MMM dd, yyyy')}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default FeaturedPost;
