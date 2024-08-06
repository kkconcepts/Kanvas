// schemas/heroSwiper.js
export default {
    name: 'heroSwiper',
    type: 'object',
    title: 'Hero Swiper',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slides',
        type: 'array',
        title: 'Slides',
        of: [{ type: 'image' }]
      }
    ]
  }
  