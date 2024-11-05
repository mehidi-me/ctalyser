// ./schemas/promotionType.ts

import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'user',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'profession',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title:"User image",
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
      ]
    }),
  ],
  icon: StarIcon,
  preview: {
    select: {
      name: 'user.name',
    },
    prepare({name}) {
      return {
        title: name || 'Untitled',
        subtitle: 'Testimonial',
        media: StarIcon,
      }
    },
  },
})
