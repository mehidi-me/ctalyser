// ./schemas/heroType.ts

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const missionSection = defineType({
  name: 'mission',
  type: 'object',
  title: 'Mission',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
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
        subtitle: 'Mission',
        media: image || DocumentTextIcon,
      }
    },
  },
})
