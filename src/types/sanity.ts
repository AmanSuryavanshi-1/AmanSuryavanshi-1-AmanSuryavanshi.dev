import type { Image } from 'sanity';
import type { PortableTextBlock } from '@portabletext/types';

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  image?: Image;
  bio?: PortableTextBlock[];
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
  mainImage?: Image;
  body: PortableTextBlock[];
  author?: Author;
  categories?: Category[];
  publishedAt?: string;
  _createdAt: string;
  _updatedAt: string;
}
