// ./schemas/heroType.ts

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
        name: 'button',
        title:"Hero button",
        type: 'document',
        fields: [
            defineField({
                name: 'title',
                type: 'string',
              }),
              defineField({
                name: 'url',
                type: 'string',
              }),
        ],
      }),
    defineField({
      name: 'image',
      title:"Hero background image",
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})
