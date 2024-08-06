import { FiImage } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

export default {
  name: 'imageWithText',
  type: 'object',
  icon: FiImage,
  fields: [
    {
        name: 'title',
        type: 'string',
    },
    {
        title: 'Text',
        name: 'text',
        type: 'blockContent',
    },
    {
      name: 'assets',
      type: 'array',
      of: [{ type: 'media' }],
      options: { layout: 'grid' },
    },
  ],
  preview: {
    select: {
        title: 'title',
        type: 'assets.0.type',
        image: 'assets.0.image.asset',
        playbackId: 'assets.0.video.asset.playbackId',
        assets: 'assets',
    },
    prepare({ type, image, playbackId, assets, }) {
      return {
        title: Object.values(assets).length + ' Assets',
        subtitle: 'imageWithText',
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
