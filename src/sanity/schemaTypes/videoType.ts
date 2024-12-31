import {defineType, defineField} from 'sanity'
import {BiVideo} from 'react-icons/bi'

export const videoType = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: BiVideo,
  preview: {
    select: {
      title: 'caption',
      media: 'videoFile'
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Video',
        media: BiVideo
      }
    }
  },
  fields: [
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/webm',
        storeOriginalFilename: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string'
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: Rule => Rule.required()
    })
  ]
})
