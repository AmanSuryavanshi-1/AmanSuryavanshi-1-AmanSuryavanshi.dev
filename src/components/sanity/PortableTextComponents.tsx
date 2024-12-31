import React from 'react';
import Image from 'next/image';
import { PortableTextComponents } from '@portabletext/react';
import CodeBlock from './CodeBlock';
import AutoPlayVideo from './AutoPlayVideo';
import { urlFor } from '@/sanity/lib/image';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="text-3xl text-forest-900 font-serif mt-12 mb-6">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl text-forest-900 font-serif mt-12 mb-6">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl text-forest-700 font-serif mt-8 mb-3">{children}</h3>,
    h4: ({children}) => <h4 className="text-lg text-forest-500 font-serif mt-4 mb-2">{children}</h4>,
    normal: ({children, value}) => {
      const indentMark = value?.markDefs?.find(mark => mark._type === 'indent');
      const indent = typeof indentMark?.level === 'number' ? indentMark.level : 0;
      return (
        <p className={`my-4 ${indent > 0 ? `pl-${indent * 4}` : ''}`}>
          {children}
        </p>
      );
    },
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-forest-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    toggle: ({children}) => (
      <details className="my-4 rounded-lg p-4 cursor-pointer">
        <summary className="font-medium">{children}</summary>
        <div className="mt-2 pl-4">{children}</div>
      </details>
    ),
  },
  marks: {
    strong: ({children}) => <strong className="font-bold text-forest-500">{children}</strong>,
    em: ({children}) => <em className="italic text-forest-700">{children}</em>,
    code: ({children}) => (
      <code className="bg-sage-100 text-forest-900 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    underline: ({children}) => <span className="underline decoration-forest-500">{children}</span>,
    'strike-through': ({children}) => <span className="line-through text-forest-500">{children}</span>,
    highlight: ({children}) => (
      <span className="bg-sage-100 text-forest-900 px-1 rounded">{children}</span>
    ),
    color: ({children, value}: {children: React.ReactNode, value?: {value?: keyof typeof colorMap}}) => {
      const colorMap = {
        default: 'text-gray-900',
        primary: 'text-blue-600',
        secondary: 'text-purple-600',
        success: 'text-green-600',
        warning: 'text-yellow-600',
        danger: 'text-red-600',
        info: 'text-cyan-600',
      } as const;
      return <span className={colorMap[value?.value || 'default']}>{children}</span>;
    },
    link: ({children, value}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-forest-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({children}) => <ul className="list-disc marker:text-forest-900 pl-6 space-y-2 my-4">{children}</ul>,
    number: ({children}) => (
      <ol className="list-decimal pl-6 space-y-2 my-4 [&>li]:pl-2 [&>li>ol]:my-2 [&>li>ol]:pl-4 [&>li>ol]:list-[lower-alpha] [&>li>ol>li>ol]:list-[lower-roman] marker:text-forest-900">
        {children}
      </ol>
    ),
    checkbox: ({children}) => (
      <ul className="pl-6 space-y-2 my-4 list-none">
        {React.Children.map(children, child => (
          <li className="flex items-center gap-2">
            <input type="checkbox" checked disabled className="accent-forest-500" />
            {child}
          </li>
        ))}
      </ul>
    ),
  },
  types: {
    image: ({value}) => {
      const {alt, caption} = value;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={alt || ' '}
            className="rounded-3xl border-4 border-white shadow-xl shadow-sage-300"
            width={800}
            height={500}
            priority
          />
          {caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
    video: ({value}) => {
      const {videoUrl, caption, alt} = value;
      
      if (!videoUrl) {
        return (
          <div className="my-8 p-4 bg-red-50 rounded-lg text-red-600">
            Video URL is missing
          </div>
        );
      }

      return <AutoPlayVideo videoUrl={videoUrl} alt={alt} caption={caption} />;
    },
    code: ({value}: {value: {code: string; language?: string; filename?: string; title?: string; markDefs?: Array<{_type: string; level?: number}>}}) => {
      if (!value?.code) {
        return null;
      }

      const indentMark = value?.markDefs?.find(mark => mark._type === 'indent');
      const indent = typeof indentMark?.level === 'number' ? indentMark.level : 0;
      
      return (
        <div className={`relative my-6 ${indent > 0 ? `ml-${indent * 4}` : ''}`}>
          <CodeBlock
            code={value.code}
            language={value.language}
            title={value.filename || value.title}
          />
        </div>
      );
    },
  },
};
