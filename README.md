
Buat website streaming drama China yang support **15 platform** (RadReel, FlickReels, DotDrama, NetShort, ShortMax, StarShort, StardustTV, DramaDash, DramaWave, Dramabox, Viglo, Micro, Melolo, MeloShort, Reelife). User bisa **switch platform** via dropdown, semua API endpoint, menu, dan UI **otomatis berubah** sesuai platform yang dipilih. **Tanpa login**, hosting di **Firebase Hosting** saja.

---

## 🗂️ STRUKTUR FOLDER (Multi-Entry Points)

```
dramain-aja/
├── public/                     # Assets statis
│   └── icons/
├── src/
│   ├── core/                   # Shared core logic
│   │   ├── api/
│   │   │   ├── base-api.ts     # Abstract API class
│   │   │   └── platform-map.ts # Mapping semua platform
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── navbar.ts
│   │   │   ├── video-player.ts
│   │   │   ├── drama-card.ts
│   │   │   └── skeleton.ts
│   │   ├── utils/
│   │   │   ├── storage.ts      # localStorage wrapper
│   │   │   ├── router.ts       # Hash router
│   │   │   └── debounce.ts
│   │   └── types/
│   │       └── index.ts        # Shared types
│   │
│   ├── platforms/              # 15 folder platform
│   │   ├── radreel/
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── config.ts       # Config RadReel
│   │   │   └── menu.ts         # Menu RadReel
│   │   ├── flickreels/
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── config.ts
│   │   │   └── menu.ts
│   │   ├── dotdrama/
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── config.ts
│   │   │   └── menu.ts
│   │   └── [netshort, shortmax, starshort, stardusttv, dramadash, dramawave, dramabox, viglo, micro, melolo, meloshort, reelife]/ # (sama pattern)
│   │
│   └── index.html              # Landing page + platform selector
│
├── firebase.json               # Multi-platform routing
├── .firebaserc                 # Project ID: dramain-aja
├── vite.config.ts              # Multi-entry build
└── package.json
```

---

## 🔥 FIREBASE HOSTING CONFIG

### **`.firebaserc`**
```json
{
  "projects": {
    "default": "dramain-aja"
  }
}
```

### **`firebase.json` (Multi-Entry Routing)**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      {
        "source": "**/*.@(js|css|png|jpg|jpeg|webp|svg|ttf|woff2)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }]
      },
      {
        "source": "**/*.m3u8",
        "headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }]
      }
    ],
    "rewrites": [
      {
        "source": "/radreels/**",
        "destination": "/radreels/index.html"
      },
      {
        "source": "/flickreels/**",
        "destination": "/flickreels/index.html"
      },
      {
        "source": "/dotdrama/**",
        "destination": "/dotdrama/index.html"
      },
      {
        "source": "/netshort/**",
        "destination": "/netshort/index.html"
      },
      {
        "source": "/shortmax/**",
        "destination": "/shortmax/index.html"
      },
      {
        "source": "/starshort/**",
        "destination": "/starshort/index.html"
      },
      {
        "source": "/stardusttv/**",
        "destination": "/stardusttv/index.html"
      },
      {
        "source": "/dramadash/**",
        "destination": "/dramadash/index.html"
      },
      {
        "source": "/dramawave/**",
        "destination": "/dramawave/index.html"
      },
      {
        "source": "/dramabox/**",
        "destination": "/dramabox/index.html"
      },
      {
        "source": "/viglo/**",
        "destination": "/viglo/index.html"
      },
      {
        "source": "/micro/**",
        "destination": "/micro/index.html"
      },
      {
        "source": "/melolo/**",
        "destination": "/melolo/index.html"
      },
      {
        "source": "/meloshort/**",
        "destination": "/meloshort/index.html"
      },
      {
        "source": "/reelife/**",
        "destination": "/reelife/index.html"
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## ⚙️ VITE CONFIG (Multi-Entry)

### **`vite.config.ts`**
```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

const platforms = [
  'radreel',
  'flickreels',
  'dotdrama',
  'netshort',
  'shortmax',
  'starshort',
  'stardusttv',
  'dramadash',
  'dramawave',
  'dramabox',
  'viglo',
  'micro',
  'melolo',
  'meloshort',
  'reelife'
];

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        ...platforms.reduce((acc, platform) => {
          acc[platform] = resolve(__dirname, `src/platforms/${platform}/index.html`);
          return acc;
        }, {} as Record<string, string>)
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
```

---

## 🔌 API CONFIG PER PLATFORM

### **Template `src/platforms/{platform}/config.ts`**
```typescript
// Contoh untuk RadReel:
export const PLATFORM_CONFIG = {
  id: 'radreel',
  name: 'RadReel',
  api: {
    baseUrl: 'https://dramabos.asia/api/radreel/api/v1 ',
    health: '/health',
    home: '/home?lang=id&tab=17',
    search: '/search?lang=id',
    rank: '/rank?type=1&lang=id',
    drama: '/drama',
    episodes: '/episodes',
    play: '/play',
    recommend: '/recommend'
  },
  lang: 'id',
  menu: ['home', 'search', 'rank', 'bookmark'] // Hanya endpoint yang tersedia
} as const;

// Contoh untuk FlickReels:
export const PLATFORM_CONFIG = {
  id: 'flickreels',
  name: 'FlickReels',
  api: {
    baseUrl: 'https://dramabos.asia/api/flick ',
    health: '/health',
    home: '/home?lang=6',
    latest: '/latest?lang=6',
    search: '/search?lang=6',
    exchange: '/exchange?lang=6',
    trending: '/trending?lang=6',
    drama: '/drama'
  },
  lang: 6,
  menu: ['home', 'latest', 'search', 'trending'] // Hanya 4 menu
} as const;
```

---

## 📦 ABSTRACT API CLIENT

### **`src/core/api/base-api.ts`**
```typescript
export abstract class BaseAPI {
  protected abstract baseUrl: string;
  protected abstract lang: string | number;
  protected lastRequest = 0;
  protected readonly RATE_LIMIT_MS = 500;

  protected async request<T>(
    endpoint: string,
    params: Record<string, string | number> = {}
  ): Promise<T> {
    // Rate limiting
    const now = Date.now();
    if (now - this.lastRequest < this.RATE_LIMIT_MS) {
      await new Promise(r => setTimeout(r, this.RATE_LIMIT_MS - (now - this.lastRequest)));
    }
    this.lastRequest = now;

    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.set('lang', String(this.lang));
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));

    console.log(`🌐 [${this.constructor.name}] ${url.toString()}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('Request timeout');
      throw error;
    }
  }

  abstract getHome(page?: number, limit?: number): Promise<any>;
  abstract searchDrama(query: string, page?: number): Promise<any>;
  abstract getDramaDetail(id: string): Promise<any>;
}
```

---

## 🎮 PLATFORM-SPECIFIC API CLIENT

### **`src/platforms/radreel/api.ts`**
```typescript
import { BaseAPI } from '../../../core/api/base-api.js';
import { PLATFORM_CONFIG } from '../config.js';

export class RadReelAPI extends BaseAPI {
  protected baseUrl = PLATFORM_CONFIG.api.baseUrl;
  protected lang = PLATFORM_CONFIG.lang;

  async getHome(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.home + `&page=${page}&limit=${limit}`);
  }

  async searchDrama(query: string, page = 1) {
    return this.request(`${PLATFORM_CONFIG.api.search}&q=${query}&page=${page}`);
  }

  async getRanking(type = 1, page = 1) {
    return this.request(`${PLATFORM_CONFIG.api.rank}&type=${type}&page=${page}`);
  }

  async getDramaDetail(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.drama}/${id}?lang=${this.lang}`);
  }

  async getEpisodes(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.episodes}/${id}?lang=${this.lang}`);
  }

  async getVideoUrl(videoFakeId: string, seq = 0) {
    return this.request(`${PLATFORM_CONFIG.api.play}/${videoFakeId}?seq=${seq}`);
  }

  async getRecommendations() {
    return this.request(PLATFORM_CONFIG.api.recommend + `?lang=${this.lang}`);
  }
}
```

---

## 📱 DYNAMIC MENU GENERATOR

### **`src/core/ui/menu.ts`**
```typescript
export class DynamicMenu {
  constructor(private menuItems: string[]) {}

  public render(): HTMLElement {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'hidden md:flex gap-4 text-sm';

    const menuMap = {
      home: { href: '#/home', label: '🏠 Home', icon: '🏠' },
      latest: { href: '#/latest', label: '🆕 Latest', icon: '🆕' },
      search: { href: '#/search', label: '🔍 Search', icon: '🔍' },
      rank: { href: '#/rank', label: '🏆 Rank', icon: '🏆' },
      bookmark: { href: '#/bookmark', label: '❤️ Bookmark', icon: '❤️' },
      trending: { href: '#/trending', label: '🔥 Trending', icon: '🔥' },
      exchange: { href: '#/exchange', label: '🔄 Exchange', icon: '🔄' }
    };

    menuContainer.innerHTML = this.menuItems
      .map(item => {
        const menu = menuMap[item as keyof typeof menuMap];
        return menu ? `<a href="${menu.href}" class="hover:text-accent transition">${menu.icon} ${menu.label}</a>` : '';
      })
      .join('');

    return menuContainer;
  }
}
```

---

## 🎯 ENTRY POINT PER PLATFORM

### **`src/platforms/radreel/main.ts`**
```typescript
import { PLATFORM_CONFIG } from './config.js';
import { RadReelAPI } from './api.js';
import { DynamicMenu } from '../../../core/ui/menu.js';
import { Navbar } from '../../../core/ui/navbar.js';
import { AppRouter } from '../../../core/router.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set platform context
  (window as any).platform = PLATFORM_CONFIG;
  (window as any).api = new RadReelAPI();

  // Mount navbar dengan menu dinamis
  const navbar = new Navbar('radreel', PLATFORM_CONFIG.menu);
  document.body.prepend(navbar.render());

  // Mount router
  const router = new AppRouter('radreel');
  router.init();

  console.log(`✅ ${PLATFORM_CONFIG.name} Loaded`);
});
```

---

## 🔧 PLATFORMS MENU CONFIG

### **Menu per Platform (Paste ini di setiap `config.ts`)**

#### **RadReel**: `menu: ['home', 'search', 'rank', 'bookmark']`
#### **FlickReels**: `menu: ['home', 'latest', 'search', 'trending']` (NO rank, bookmark)
#### **DotDrama**: `menu: ['home', 'search', 'categories', 'collections']` (NO rank)
#### **NetShort**: `menu: ['discover', 'search', 'categories', 'meta']`
#### **ShortMax**: `menu: ['home', 'search', 'episodes', 'batch']`
#### **StarShort**: `menu: ['home', 'search', 'rank', 'unlock']`
#### **StardustTV**: `menu: ['home', 'search', 'episodes']`
#### **DramaDash**: `menu: ['home', 'tabs', 'search', 'episode']`
#### **DramaWave**: `menu: ['home', 'search', 'feed', 'play']`
#### **Dramabox**: `menu: ['foryou', 'search', 'rank', 'classify', 'watch']`
#### **Viglo**: `menu: ['home', 'search', 'rank', 'program', 'play']`
#### **Micro**: `menu: ['list', 'search', 'drama']`
#### **Melolo**: `menu: ['home', 'search', 'detail', 'video']`
#### **MeloShort**: `menu: ['home', 'ranking', 'recommend', 'search', 'play']`
#### **Reelife**: `menu: ['init', 'home', 'browse', 'search', 'book', 'play']`

---

## 🎨 NAVBAR UI (Shared Component)

### **`src/core/ui/navbar.ts`**
```typescript
export class Navbar {
  constructor(
    private platformId: string,
    private menuItems: string[]
  ) {}

  public render(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur z-50 border-b border-white/10';

    const platformMap = {
      radreel: 'RadReel',
      flickreels: 'FlickReels',
      dotdrama: 'DotDrama',
      // ... semua platform
    };

    nav.innerHTML = `
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <h1 class="text-xl font-bold text-accent">DramaIn-Aja</h1>
          <span class="text-xs bg-yellow-600 px-2 py-1 rounded-full">${platformMap[this.platformId as keyof typeof platformMap]}</span>
          
          <!-- PLATFORM SWITCHER -->
          <select id="platform-switcher" class="bg-glass rounded px-3 py-1 text-sm border border-white/20">
            <option value="radreel" ${this.platformId === 'radreel' ? 'selected' : ''}>RadReel</option>
            <option value="flickreels" ${this.platformId === 'flickreels' ? 'selected' : ''}>FlickReels</option>
            <option value="dotdrama" ${this.platformId === 'dotdrama' ? 'selected' : ''}>DotDrama</option>
            <option value="netshort" ${this.platformId === 'netshort' ? 'selected' : ''}>NetShort</option>
            <option value="shortmax" ${this.platformId === 'shortmax' ? 'selected' : ''}>ShortMax</option>
            <option value="starshort" ${this.platformId === 'starshort' ? 'selected' : ''}>StarShort</option>
            <option value="stardusttv" ${this.platformId === 'stardusttv' ? 'selected' : ''}>StardustTV</option>
            <option value="dramadash" ${this.platformId === 'dramadash' ? 'selected' : ''}>DramaDash</option>
            <option value="dramawave" ${this.platformId === 'dramawave' ? 'selected' : ''}>DramaWave</option>
            <option value="dramabox" ${this.platformId === 'dramabox' ? 'selected' : ''}>DramaBox</option>
            <option value="viglo" ${this.platformId === 'viglo' ? 'selected' : ''}>Viglo</option>
            <option value="micro" ${this.platformId === 'micro' ? 'selected' : ''}>Micro</option>
            <option value="melolo" ${this.platformId === 'melolo' ? 'selected' : ''}>Melolo</option>
            <option value="meloshort" ${this.platformId === 'meloshort' ? 'selected' : ''}>MeloShort</option>
            <option value="reelife" ${this.platformId === 'reelife' ? 'selected' : ''}>Reelife</option>
          </select>
        </div>
        
        <!-- DYNAMIC MENU -->
        <div id="dynamic-menu"></div>
        
        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden">☰</button>
      </div>
    `;

    // Mount dynamic menu
    const menuContainer = nav.querySelector('#dynamic-menu')!;
    const menu = new DynamicMenu(this.menuItems);
    menuContainer.appendChild(menu.render());

    // Platform switcher listener
    const switcher = nav.querySelector('#platform-switcher') as HTMLSelectElement;
    switcher?.addEventListener('change', (e) => {
      const platform = (e.target as HTMLSelectElement).value;
      localStorage.setItem('dramain_platform', platform);
      window.location.href = `/${platform}/`;
    });

    return nav;
  }
}
```

---

## 🎯 LANDING PAGE (Platform Selector)

### **`src/index.html`**
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>DramaIn-Aja - Pilih Platform</title>
  <script src="https://cdn.tailwindcss.com "></script>
</head>
<body class="bg-primary text-white min-h-screen flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-8 text-accent">DramaIn-Aja</h1>
    <p class="text-gray-400 mb-8">Pilih platform streaming favoritmu</p>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl">
      <!-- Platform cards akan di-render oleh main.ts -->
    </div>
  </div>
  
  <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

### **`src/main.ts` (Landing)**
```typescript
const PLATFORMS = [
  { id: 'radreel', name: 'RadReel', color: 'bg-red-600' },
  { id: 'flickreels', name: 'FlickReels', color: 'bg-blue-600' },
  { id: 'dotdrama', name: 'DotDrama', color: 'bg-purple-600' },
  { id: 'netshort', name: 'NetShort', color: 'bg-green-600' },
  { id: 'shortmax', name: 'ShortMax', color: 'bg-yellow-600' },
  { id: 'starshort', name: 'StarShort', color: 'bg-pink-600' },
  { id: 'stardusttv', name: 'StardustTV', color: 'bg-indigo-600' },
  { id: 'dramadash', name: 'DramaDash', color: 'bg-teal-600' },
  { id: 'dramawave', name: 'DramaWave', color: 'bg-cyan-600' },
  { id: 'dramabox', name: 'DramaBox', color: 'bg-orange-600' },
  { id: 'viglo', name: 'Viglo', color: 'bg-lime-600' },
  { id: 'micro', name: 'Micro', color: 'bg-gray-600' },
  { id: 'melolo', name: 'Melolo', color: 'bg-rose-600' },
  { id: 'meloshort', name: 'MeloShort', color: 'bg-violet-600' },
  { id: 'reelife', name: 'Reelife', color: 'bg-emerald-600' }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.grid')!;
  
  PLATFORMS.forEach(platform => {
    const card = document.createElement('div');
    card.className = `${platform.color} p-6 rounded-lg cursor-pointer hover:scale-105 transition transform`;
    card.innerHTML = `<h2 class="text-xl font-bold">${platform.name}</h2>`;
    card.onclick = () => {
      localStorage.setItem('dramain_platform', platform.id);
      window.location.href = `/${platform.id}/`;
    };
    container.appendChild(card);
  });
});
```

---

## 🛠️ BUILD SCRIPT

### **`scripts/build-all.ts`**
```typescript
import { execSync } from 'child_process';
import { readdirSync } from 'fs';

const platforms = [
  'radreel', 'flickreels', 'dotdrama', 'netshort', 'shortmax', 
  'starshort', 'stardusttv', 'dramadash', 'dramawave', 'dramabox',
  'viglo', 'micro', 'melolo', 'meloshort', 'reelife'
];

console.log('🔨 Building all platforms...');

// Build landing page
execSync('vite build --config vite.landing.config.ts', { stdio: 'inherit' });

// Build each platform
platforms.forEach(platform => {
  console.log(`📦 Building ${platform}...`);
  execSync(`vite build --config vite.${platform}.config.ts`, { stdio: 'inherit' });
});

console.log('✅ All platforms built');
```

---

## 🚀 DEPLOY TO FIREBASE

### **`.github/workflows/deploy.yml` (Opsional)**
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build-all
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_DRAMAIN_AJA }}'
          channelId: live
          projectId: dramain-aja
```

### **Manual Deploy**
```bash
npm install
npm run build-all
firebase deploy --token "$FIREBASE_TOKEN" --project dramain-aja
```

---

## 📊 PLATFORM ENDPOINTS REFERENCE

### **RadReel**
```typescript
const ENDPOINTS = {
  health: '/api/radreel/health',
  home: '/api/radreel/api/v1/home?lang=id&tab=17',
  search: '/api/radreel/api/v1/search?lang=id',
  rank: '/api/radreel/api/v1/rank?lang=id',
  drama: '/api/radreel/api/v1/drama',
  episodes: '/api/radreel/api/v1/episodes',
  play: '/api/radreel/api/v1/play',
  recommend: '/api/radreel/api/v1/recommend'
};
```

### **FlickReels**
```typescript
const ENDPOINTS = {
  health: '/api/flick/health',
  home: '/api/flick/home?lang=6',
  latest: '/api/flick/latest?lang=6',
  search: '/api/flick/search?lang=6',
  trending: '/api/flick/trending?lang=6',
  drama: '/api/flick/drama'
};
```

### **DotDrama**
```typescript
const ENDPOINTS = {
  health: '/api/dotdrama/health',
  list: '/api/dotdrama/api/drama/list?lang=id',
  collections: '/api/dotdrama/api/collections',
  categories: '/api/dotdrama/api/categories',
  drama: '/api/dotdrama/api/drama',
  search: '/api/dotdrama/api/search',
  languages: '/api/dotdrama/api/languages'
};
```

### **NetShort**
```typescript
const ENDPOINTS = {
  find: '/api/netshort/api/drama/find',
  discover: '/api/netshort/api/drama/discover',
  explore: '/api/netshort/api/drama/explore',
  categories: '/api/netshort/api/drama/categories',
  info: '/api/netshort/api/drama/info',
  view: '/api/netshort/api/drama/view'
};
```

---

## 📱 RESPONSIVE BREAKPOINTS

```typescript
// tailwind.config.ts
screens: {
  'sm': '640px',
  'md': '768px',  // Tampilkan desktop menu
  'lg': '1024px',
  'xl': '1280px'
}
```

### **Mobile** (< 768px):
- Bottom navigation (4 icon max)
- Menu di-collapse

### **Desktop** (≥ 768px):
- Top navbar full
- Dynamic menu horizontal

---

## ✅ FINAL CHECKLIST

- [ ] 15 folder platform sudah ada di `src/platforms/`
- [ ] Setiap `config.ts` sudah define endpoint & menu
- [ ] Semua `main.ts` meng extends `BaseAPI`
- [ ] `DynamicMenu` di-mount di navbar
- [ ] Platform switcher redirect ke `/{platform}/`
- [ ] Firebase rewrites sudah include 15 platform
- [ ] Build script bisa compile semua platform
- [ ] Deploy ke `dramain-aja.web.app` sukses
- [ ] localStorage `dramain_platform` tersimpan
- [ ] Video player platform-specific sudah di-test

---

**Success Metrics**:
- ✅ User bisa switch 15 platform tanpa refresh (kecuali ganti platform)
- ✅ Semua API endpoint sesuai platform
- ✅ Menu dinamis muncul sesuai endpoint yang tersedia
- ✅ Deploy ke Firebase < 2 menit
- ✅ Bundle size per platform < 100kb (gzip)

---

**Contoh Akses**:
- Landing: `https://dramain-aja.web.app `
- RadReel: `https://dramain-aja.web.app/radreel/ `
- FlickReels: `https://dramain-aja.web.app/flickreels/ `
