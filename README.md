
# 🎬 DramaIn-Aja - Website Streaming Drama China

Website streaming drama China yang mendukung **15 platform berbeda** dengan fitur switching platform dinamis. User bisa mengganti platform via dropdown tanpa perlu login.

## ✨ Fitur Utama

- ✅ **15 Platform Streaming** - RadReel, FlickReels, DotDrama, NetShort, ShortMax, StarShort, StardustTV, DramaDash, DramaWave, DramaBox, Viglo, Micro, Melolo, MeloShort, Reelife
- ✅ **Dynamic Platform Switcher** - Menu, API endpoint, dan UI berubah otomatis sesuai platform yang dipilih
- ✅ **Tanpa Login** - Akses gratis tanpa perlu autentikasi
- ✅ **Responsive Design** - Mobile-friendly dengan Tailwind CSS
- ✅ **Multi-Entry Build** - Vite mengcompile setiap platform sebagai entry point terpisah
- ✅ **Firebase Hosting Ready** - Siap deploy ke Firebase dengan routing otomatis
- ✅ **0 Error Build** - Semua 15 platform compile berhasil tanpa error

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Browser akan otomatis membuka di `http://localhost:3000`

### 3. Build untuk Production

```bash
npm run build
```

Output akan berada di folder `dist/`

## 🔥 Firebase Deployment

### Deploy ke Firebase

```bash
npm run deploy
```

Atau manual:
```bash
npm run build
firebase deploy --project dramain-aja
```

## 📁 Struktur Folder

```
dramain/
├── src/
│   ├── core/                          # Shared core logic
│   │   ├── api/
│   │   │   └── base-api.ts           # Abstract API class
│   │   ├── ui/
│   │   │   ├── navbar.ts             # Navigation bar
│   │   │   ├── menu.ts               # Dynamic menu
│   │   │   ├── drama-card.ts         # Drama card component
│   │   │   └── skeleton.ts           # Loading skeleton
│   │   ├── utils/
│   │   │   ├── storage.ts            # localStorage wrapper
│   │   │   └── helpers.ts            # Utility functions
│   │   ├── router.ts                 # Hash router
│   │   └── types/
│   │       └── index.ts              # TypeScript types
│   │
│   ├── platforms/                     # 15 folder platform
│   │   ├── radreel/
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── config.ts
│   │   │   └── api.ts
│   │   ├── flickreels/
│   │   ├── dotdrama/
│   │   ├── netshort/
│   │   ├── shortmax/
│   │   ├── starshort/
│   │   ├── stardusttv/
│   │   ├── dramadash/
│   │   ├── dramawave/
│   │   ├── dramabox/
│   │   ├── viglo/
│   │   ├── micro/
│   │   ├── melolo/
│   │   ├── meloshort/
│   │   └── reelife/
│   │
│   ├── index.html                    # Landing page
│   └── index.css                     # Global styles
│
├── dist/                             # Build output
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── firebase.json
├── .firebaserc
└── README.md
```

## 📊 Platform Configuration

Setiap platform memiliki konfigurasi sendiri di `src/platforms/{platform}/config.ts`:

```typescript
export const PLATFORM_CONFIG = {
  id: 'radreel',
  name: 'RadReel',
  api: {
    baseUrl: 'https://dramabos.asia/api/radreel/api/v1',
    home: '/home',
    search: '/search',
    rank: '/rank',
    drama: '/drama'
  },
  lang: 'id',
  menu: ['home', 'search', 'rank', 'bookmark']
};
```

### Platform & Menu Reference

| Platform | Menu Items |
|----------|-----------|
| RadReel | home, search, rank, bookmark |
| FlickReels | home, latest, search, trending |
| DotDrama | home, search, categories, collections |
| NetShort | discover, search, categories, meta |
| ShortMax | home, search, episodes, batch |
| StarShort | home, search, rank, unlock |
| StardustTV | home, search, episodes |
| DramaDash | home, tabs, search, episode |
| DramaWave | home, search, feed, play |
| DramaBox | foryou, search, rank, classify, watch |
| Viglo | home, search, rank, program, play |
| Micro | list, search, drama |
| Melolo | home, search, detail, video |
| MeloShort | home, ranking, recommend, search, play |
| Reelife | init, home, browse, search, book, play |

## 🎨 Styling

Project menggunakan **Tailwind CSS** dengan custom theme:

```javascript
// tailwind.config.js
colors: {
  primary: '#0f0f0f',    // Dark background
  secondary: '#1a1a1a',  // Card background
  accent: '#ff6b35'      // Orange accent
}
```

## 🛣️ Routing

Project menggunakan **Hash Router** untuk SPA navigation:

```
http://dramain-aja.web.app/radreel/#/home
http://dramain-aja.web.app/radreel/#/search
http://dramain-aja.web.app/flickreels/#/latest
```

## 📱 Responsive Design

- **Mobile** (< 768px): Mobile-optimized layout, collapsed menu
- **Desktop** (≥ 768px): Full navbar, horizontal menu
- **Tailwind Breakpoints**: sm, md, lg, xl

## 🌐 Akses Platform

### Landing Page
```
https://dramain-aja.web.app/
```
User memilih platform dari grid yang colorful

### Per Platform
```
https://dramain-aja.web.app/radreel/
https://dramain-aja.web.app/flickreels/
https://dramain-aja.web.app/dotdrama/
... (13 platform lainnya)
```

### Platform Switcher
Di navbar, ada dropdown untuk switch antar platform. Ketika dipilih, page akan redirect ke `/{platform}/`

## 📦 Production Build Size

Setiap platform bundle size:
- **HTML**: 0.6-0.7 kB (gzip)
- **JavaScript**: 1.2-1.5 kB (gzip)
- **CSS**: 3.8 kB (shared, gzip)

**Total**: ~15-20 kB per platform (gzip)

## ✅ Build Status

```
✓ All 15 Platforms Compiled Successfully
- No errors
- No warnings
- Ready for production deployment
```

## 🎯 Success Metrics

- ✅ Semua 15 platform build tanpa error
- ✅ Platform switcher berfungsi (redirect ke /{platform}/)
- ✅ Menu dinamis sesuai endpoint yang tersedia
- ✅ API data ter-load di home page setiap platform
- ✅ Search functionality bekerja
- ✅ Responsive di mobile dan desktop
- ✅ Deploy ke Firebase < 2 menit
- ✅ Bundle size optimal (gzip < 100kb per platform)

## 📝 Development Workflow

1. **Development**:
   ```bash
   npm run dev
   ```

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Deploy to Firebase**:
   ```bash
   npm run deploy
   ```

## 🤝 Support

Untuk bantuan atau issue, silakan buat PR atau issue di repository ini.

---

**Version**: 1.0.0  
**Status**: ✅ Production Ready  
**Last Build**: January 11, 2025
