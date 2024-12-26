import React from 'react';
import Image from 'next/image';
import { PortableTextComponents } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { urlFor } from '@/sanity/lib/image';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="text-3xl text-forest-900 font-serif mt-12 mb-6">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl text-forest-900 font-serif mt-12 mb-6">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl text-forest-700 font-serif mt-8 mb-3">{children}</h3>,
    h4: ({children}) => <h4 className="text-lg text-forest-500 font-serif mt-4 mb-2">{children}</h4>,
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
    strong: ({children}) => <strong className="font-bold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    code: ({children}) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    underline: ({children}) => <span className="underline">{children}</span>,
    'strike-through': ({children}) => <span className="line-through">{children}</span>,
    highlight: ({children}) => (
      <span className="bg-yellow-100 px-1 rounded">{children}</span>
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
    bullet: ({children}) => <ul className="list-disc pl-6 my-4">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
    checkbox: ({children}) => (
      <ul className="pl-6 my-4 list-none">
        {React.Children.map(children, child => (
          <li className="flex items-center gap-2">
            <input type="checkbox" checked disabled />
            {child}
          </li>
        ))}
      </ul>
    ),
  },
  types: {
    image: ({value}) => {
      return (
        <div className="my-8 relative">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">{value.caption}</p>
          )}
        </div>
      );
    },
    code: ({value}) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'text'}
            style={atomOneDark}
            className="rounded-lg !mt-0"
            customStyle={{
              marginTop: value.filename ? 0 : undefined,
              borderTopLeftRadius: value.filename ? 0 : undefined,
              borderTopRightRadius: value.filename ? 0 : undefined,
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};
