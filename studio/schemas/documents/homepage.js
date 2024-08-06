import { FiHome } from 'react-icons/fi';
import { MODULES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'homepage',
  title: 'Hompage',
  icon: FiHome,
  fields: [
    {
      title: 'Options',
      name: 'options',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          title: 'Option 1?',
          name: 'isOption',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: true,
        },
        {
          title: 'Option 1?',
          name: 'isOption2',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: false,
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      of: MODULES,
    },
    {
      name: 'menus',
      title: 'Menus',
      type: 'array',
      of: [
        {
          title: 'Menu',
          type: 'reference',
          to: [{ type: 'menu' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiHome,
      };
    },
  },
};
