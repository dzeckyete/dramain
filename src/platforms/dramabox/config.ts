export const PLATFORM_CONFIG = {
  id: 'dramabox',
  name: 'DramaBox',
  api: {
    baseUrl: 'https://dramabos.asia/api/dramabox',
    foryou: '/foryou',
    search: '/search',
    rank: '/rank',
    classify: '/classify',
    watch: '/watch',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['foryou', 'search', 'rank', 'classify', 'watch']
} as const;