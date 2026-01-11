export const PLATFORM_CONFIG = {
  id: 'dotdrama',
  name: 'DotDrama',
  api: {
    baseUrl: 'https://dramabos.asia/api/dotdrama',
    health: '/health',
    list: '/api/drama/list',
    collections: '/api/collections',
    categories: '/api/categories',
    drama: '/api/drama',
    search: '/api/search',
    languages: '/api/languages'
  },
  lang: 'id',
  menu: ['home', 'search', 'categories', 'collections']
} as const;