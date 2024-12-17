import type { Image } from 'sanity';
import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage extends Image {
  alt?: string;
}

export interface PortableTextChild {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface PortableTextBlockType extends PortableTextBlock {
  _type: 'block';
  children: PortableTextChild[];
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  image?: SanityImage;
  bio?: PortableTextBlockType[];
}

export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  description?: string;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: { current: string; _type: 'slug' };
  excerpt?: string;
  mainImage?: SanityImage;
  body: PortableTextBlockType[];
  author?: Author;
  categories?: Category[];
  publishedAt?: string;
  _createdAt: string;
  _updatedAt: string;
}
