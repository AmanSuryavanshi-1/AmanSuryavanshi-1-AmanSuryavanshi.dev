import { Image, Slug } from 'sanity';
import { PortableTextBlock } from '@portabletext/types';

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
  slug: Slug;
  excerpt?: string;
  mainImage?: Image;
  body: PortableTextBlock[];
  author?: Author;
  categories?: Category[];
  publishedAt?: string;
  _createdAt: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}
