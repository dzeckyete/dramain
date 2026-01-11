export const PLATFORM_CONFIG = {
  id: 'dramawave',
  name: 'DramaWave',
  api: {
    baseUrl: 'https://dramabos.asia/api/dramawave',
    home: '/home',
    search: '/search',
    feed: '/feed',
    play: '/play',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'feed', 'play']
} as const;