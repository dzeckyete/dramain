export const PLATFORM_CONFIG = {
  id: 'micro',
  name: 'Micro',
  api: {
    baseUrl: 'https://dramabos.asia/api/micro',
    list: '/list',
    search: '/search',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['list', 'search', 'drama']
} as const;