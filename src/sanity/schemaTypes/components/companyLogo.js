// imageGallery.js

import { ImagesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companyLogo = defineType({
  name: "companyLogo",
  type: "object",
  title: "Company logo",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "images",
      title:"Logos",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      return {
        title: images
          ? `${images.length === 1 ? `1 image` : `${images.length} images`} `
          : "No images",
        subtitle: "Logos",
        media: images ? images[0] : ImagesIcon,
      };
    },
  },
});
