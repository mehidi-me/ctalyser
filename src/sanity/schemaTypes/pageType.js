// ./schemas/pageType.ts

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'companyLogo',
          type: 'companyLogo',
        }),
        defineArrayMember({
          name: 'mission',
          type: 'mission',
        }),
        defineArrayMember({
          name: 'section',
          type: 'section',
        }),
        defineArrayMember({
          name: 'testimonialSection',
          type: 'testimonialSection',
        }),
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
        // etc...
      ],
    }),
  ],
  icon: DocumentIcon,
})
