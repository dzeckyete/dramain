export const PLATFORM_CONFIG = {
  id: 'shortmax',
  name: 'ShortMax',
  api: {
    baseUrl: 'https://dramabos.asia/api/shortmax',
    home: '/home',
    search: '/search',
    episodes: '/episodes',
    batch: '/batch',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'episodes', 'batch']
} as const;