export const PLATFORM_CONFIG = {
  id: 'netshort',
  name: 'NetShort',
  api: {
    baseUrl: 'https://dramabos.asia/api/netshort',
    find: '/api/drama/find',
    discover: '/api/drama/discover',
    explore: '/api/drama/explore',
    categories: '/api/drama/categories',
    info: '/api/drama/info',
    view: '/api/drama/view'
  },
  lang: 'id',
  menu: ['discover', 'search', 'categories', 'meta']
} as const;