export const PLATFORM_CONFIG = {
  id: 'flickreels',
  name: 'FlickReels',
  api: {
    baseUrl: 'https://dramabos.asia/api/flick',
    health: '/health',
    home: '/home',
    latest: '/latest',
    search: '/search',
    trending: '/trending',
    drama: '/drama'
  },
  lang: 6,
  menu: ['home', 'latest', 'search', 'trending']
} as const;