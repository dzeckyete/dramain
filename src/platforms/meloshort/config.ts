export const PLATFORM_CONFIG = {
  id: 'meloshort',
  name: 'MeloShort',
  api: {
    baseUrl: 'https://dramabos.asia/api/meloshort',
    home: '/home',
    ranking: '/ranking',
    recommend: '/recommend',
    search: '/search',
    play: '/play',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'ranking', 'recommend', 'search', 'play']
} as const;