export const PLATFORM_CONFIG = {
  id: 'radreel',
  name: 'RadReel',
  api: {
    baseUrl: 'https://dramabos.asia/api/radreel/api/v1',
    health: '/health',
    home: '/home',
    search: '/search',
    rank: '/rank',
    drama: '/drama',
    episodes: '/episodes',
    play: '/play',
    recommend: '/recommend'
  },
  lang: 'id',
  menu: ['home', 'search', 'rank', 'bookmark']
} as const;
