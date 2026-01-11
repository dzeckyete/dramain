export const PLATFORM_CONFIG = {
  id: 'reelife',
  name: 'Reelife',
  api: {
    baseUrl: 'https://dramabos.asia/api/reelife',
    init: '/init',
    home: '/home',
    browse: '/browse',
    search: '/search',
    book: '/book',
    play: '/play',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['init', 'home', 'browse', 'search', 'book', 'play']
} as const;