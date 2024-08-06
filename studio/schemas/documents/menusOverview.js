import { FiSidebar } from 'react-icons/fi';
import { slugify, slugValidation } from '../../utils/sanityHelper';

export default {
  name: 'menusOverview',
  title: 'Menus Overview',
  type: 'document',
  icon: FiSidebar,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Menus Overview',
        media: FiSidebar,
      };
    },
  },
};
