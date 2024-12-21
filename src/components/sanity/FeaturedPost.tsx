import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BsEye } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { urlFor } from '@/sanity/lib/image';
import type { Post, PortableTextBlockType } from '@/sanity/sanity';
import { calculateReadTime } from './calculateReadTime';

interface FeaturedPostProps {
    post: Post;
    isSingle: boolean; // New prop to determine if it's a single post
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

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, isSingle }) => {
    if (!post) return null;

    const readTime = calculateReadTime(post.body);
    const excerpt = extractTextFromBody(post.body);

    return (
        <Link href={`/blogs/${post.slug.current}`} className="group">
            <article className={`relative overflow-hidden ${
                isSingle ? 'aspect-[16/9]' : 'aspect-[4/3]'
            } rounded-3xl shadow-lg shadow-forest-500 border-4 border-sage-100 
            bg-gradient-to-br from-lime-500 to-lime-300/10 
            hover:from-forest-900 hover:to-forest-500 
            transition-all duration-300 group`}>
                {/* Main Image with Gradient Overlay */}
                {post.mainImage && (
                    <>
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/95 to-transparent"></div>
                    </>
                )}

                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 bg-lime-500/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-900 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-900"></span>
                        </span>
                        <span className="text-forest-900 font-medium text-xs">Featured</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-sage-100">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories
                                .filter(category => category.title.toLowerCase() !== 'featured')
                                .map(category => (
                                    <span
                                        key={category._id}
                                        className="px-3 py-1 text-xs font-medium bg-forest-900 border-2 bg-opacity-80 border-white text-sage-100 backdrop-blur-sm rounded-full group-hover:bg-lime-500 group-hover:text-forest-900 transition-colors duration-300"
                                    >
                                        {category.title}
                                    </span>
                                ))
                            }
                        </div>
                    )}

                    {/* Title & Description */}
                    <div className="space-y-2">
                        <h2 className={`font-heading ${
                            isSingle ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                        } font-bold leading-tight group-hover:text-lime-500 transition-colors duration-300`}>
                            {post.title}
                        </h2>
                        
                        <p className={`text-lime-100 line-clamp-3 ${
                            isSingle ? 'text-base md:text-lg group-hover:text-lime-700' : 'text-sm md:text-base group-hover:text-sage-300'
                        }`}>
                            {excerpt}
                        </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-lime-500">
                        <div className="flex items-center space-x-4">
                            {post.author?.image && (
                                <Image
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name || 'Author'}
                                    width={32}
                                    height={32}
                                    className="rounded-full ring-2 bg-lime-500 ring-sage-100 group-hover:ring-lime-500 transition-colors duration-300"
                                />
                            )}
                            <div>
                                <p className="text-sm font-medium text-sage-100">{post.author?.name}</p>
                                <p className="text-xs text-sage-300">
                                    {format(new Date(post._createdAt), 'MMM dd, yyyy')}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-sage-300">
                            <span className="flex items-center gap-1.5">
                                <BiTime className="w-4 h-4" />
                                {readTime} min
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BsEye className="w-4 h-4" />
                                {/* {post.views || 0} */} 296
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default FeaturedPost;
