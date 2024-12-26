import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'
import React from 'react'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {
          title: 'Quote',
          value: 'blockquote',
          component: ({children}) => (
            <blockquote className="border-l-4 pl-4 border-gray-300">
              {children}
            </blockquote>
          )
        },
        {
          title: 'Toggle',
          value: 'toggle',
          component: ({children}) => (
            <details className="group">
              <summary className="list-none cursor-pointer">
                {children}
              </summary>
              <div className="pl-4 mt-2">
                {/* Content will be nested here */}
              </div>
            </details>
          )
        },
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {title: 'Check List', value: 'checkbox'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Highlight', value: 'highlight'},
        ],
        annotations: [
          {
            name: 'color',
            title: 'Color',
            type: 'object',
            fields: [
              {
                name: 'value',
                title: 'Color',
                type: 'string',
                options: {
                  list: [
                    {title: 'Default', value: 'default'},
                    {title: 'Primary', value: 'primary'},
                    {title: 'Secondary', value: 'secondary'},
                    {title: 'Success', value: 'success'},
                    {title: 'Warning', value: 'warning'},
                    {title: 'Danger', value: 'danger'},
                    {title: 'Info', value: 'info'},
                  ],
                },
              },
            ],
            components: {
              annotation: ({children, value}: {children: React.ReactNode, value?: {value: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'}}) => {
                const colorMap = {
                  default: 'text-gray-900',
                  primary: 'text-blue-600',
                  secondary: 'text-purple-600',
                  success: 'text-green-600',
                  warning: 'text-yellow-600',
                  danger: 'text-red-600',
                  info: 'text-cyan-600',
                } as const;
                return <span className={colorMap[value?.value || 'default']}>{children}</span>
              }
            },
          },
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Image caption displayed below the image.'
        }
      ]
    }),
    defineArrayMember({
      type: 'code',
      name: 'code',
      title: 'Code Block',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'Python', value: 'python'},
          {title: 'JSX', value: 'jsx'},
          {title: 'TSX', value: 'tsx'},
        ],
        withFilename: true,
      },
    })
  ]
})
