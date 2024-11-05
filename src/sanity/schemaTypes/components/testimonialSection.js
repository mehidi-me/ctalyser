// ./schemas/heroType.ts

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
// {
//     name: 'ReferenceMultiSelect',
//     title: 'Country',
//     type: 'array',
//     of: [
//       {
//        type: 'reference',
//        to: { type: 'country'}
//       }
//     ],
//     inputComponent: ReferenceSelect
//   }
export const testimonialSection = defineType({
  name: 'testimonialSection',
  type: 'object',
  title: 'Testimonial Section',
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
        name: 'testimonials',
        type: 'array',
        of: [{type: 'reference',to: {type: 'testimonial'}}],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Testimonial Section',
        media: DocumentTextIcon,
      }
    },
  },
})
