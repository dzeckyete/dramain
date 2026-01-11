export const PLATFORM_CONFIG = {
  id: 'viglo',
  name: 'Viglo',
  api: {
    baseUrl: 'https://dramabos.asia/api/viglo',
    home: '/home',
    search: '/search',
    rank: '/rank',
    program: '/program',
    play: '/play',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'rank', 'program', 'play']
} as const;