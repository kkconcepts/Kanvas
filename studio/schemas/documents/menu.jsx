import { orderRankField } from '@sanity/orderable-document-list';
import { FiSquare } from 'react-icons/fi';
import { generatePreviewMedia, slugify, slugValidation } from '../../utils/sanityHelper';
import { MODULES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'menu',
  title: 'Menu',
  icon: FiSquare,
  fields: [
    orderRankField({ type: 'menu' }),
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'isProjectHidden',
      title: 'Hide on Homepage?',
      description: 'The project can still be accessed via the URL',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'description',
      type: 'blockContent',
    },
    {
      name: 'filter',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
          title: 'Category',
          // options: {
          //   disableNew: true,
          // },
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      of: MODULES,
    },
    {
      title: 'Preview, Hero Media',
      name: 'media',
      type: 'media',
    },
    {
      name: 'collaborator',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'website',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'media.type',
      image: 'media.image.asset',
      playbackId: 'media.video.asset.playbackId',
    },
    prepare({ title, type, image, playbackId }) {
      return {
        title,
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};