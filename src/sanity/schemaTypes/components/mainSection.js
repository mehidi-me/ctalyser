// ./schemas/formType.js

import {EnvelopeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const mainSection = defineType({
  name: 'section',
  title:"Sections",
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'anim_image',
      type: 'string',
      initialValue:'AnimImage1',
      description: 'Select anim image',
      options: {
        list: ['AnimImage1', 'AnimImage2'],
        
      },
    }),
    defineField({
      name: 'anim_position',
      type: 'string',
      initialValue:'left',
      description: 'Select anim position',
      options: {
        list: ['left', 'right'],
      },
    }),
  ],
  icon: EnvelopeIcon,
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      anim_position: 'anim_position'
    },
    prepare({title, subtitle,anim_position}) {
      return {
        title: title || 'Untitled',
        subtitle:'Section -'+anim_position,
        media: EnvelopeIcon,
        
      }
    },
  },
})
