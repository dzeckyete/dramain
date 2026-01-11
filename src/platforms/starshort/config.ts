export const PLATFORM_CONFIG = {
  id: 'starshort',
  name: 'StarShort',
  api: {
    baseUrl: 'https://dramabos.asia/api/starshort',
    home: '/home',
    search: '/search',
    rank: '/rank',
    unlock: '/unlock',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'rank', 'unlock']
} as const;