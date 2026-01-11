export const PLATFORM_CONFIG = {
  id: 'dramadash',
  name: 'DramaDash',
  api: {
    baseUrl: 'https://dramabos.asia/api/dramadash',
    home: '/home',
    tabs: '/tabs',
    search: '/search',
    episode: '/episode',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'tabs', 'search', 'episode']
} as const;