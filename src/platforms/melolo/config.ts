export const PLATFORM_CONFIG = {
  id: 'melolo',
  name: 'Melolo',
  api: {
    baseUrl: 'https://dramabos.asia/api/melolo',
    home: '/home',
    search: '/search',
    detail: '/detail',
    video: '/video',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'detail', 'video']
} as const;