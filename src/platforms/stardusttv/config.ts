export const PLATFORM_CONFIG = {
  id: 'stardusttv',
  name: 'StardustTV',
  api: {
    baseUrl: 'https://dramabos.asia/api/stardusttv',
    home: '/home',
    search: '/search',
    episodes: '/episodes',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'episodes']
} as const;