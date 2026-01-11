import { DynamicMenu } from './menu.js';

export class Navbar {
  constructor(
    private platformId: string,
    private menuItems: string[]
  ) {}

  public render(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur z-50 border-b border-white/10';

    const platformMap: Record<string, string> = {
      radreel: 'RadReel',
      flickreels: 'FlickReels',
      dotdrama: 'DotDrama',
      netshort: 'NetShort',
      shortmax: 'ShortMax',
      starshort: 'StarShort',
      stardusttv: 'StardustTV',
      dramadash: 'DramaDash',
      dramawave: 'DramaWave',
      dramabox: 'DramaBox',
      viglo: 'Viglo',
      micro: 'Micro',
      melolo: 'Melolo',
      meloshort: 'MeloShort',
      reelife: 'Reelife'
    };

    const platformName = platformMap[this.platformId] || this.platformId;
    const platforms = Object.entries(platformMap).map(([id, name]) => 
      `<option value="${id}" ${this.platformId === id ? 'selected' : ''}>${name}</option>`
    ).join('');

    nav.innerHTML = `
      <div class="container mx-auto px-4 py-3 flex items-center justify-between h-[70px]">
        <div class="flex items-center gap-3">
          <h1 class="text-lg md:text-xl font-bold text-accent">DramaIn-Aja</h1>
          <span class="text-xs bg-yellow-600 px-2 py-1 rounded-full font-semibold">${platformName}</span>
          
          <select id="platform-switcher" class="bg-secondary rounded px-3 py-1 text-xs md:text-sm border border-white/20 cursor-pointer hover:border-accent transition">
            ${platforms}
          </select>
        </div>
        
        <div id="dynamic-menu" class="flex-1 flex justify-center"></div>
        
        <button id="mobile-menu-btn" class="md:hidden text-2xl hover:text-accent transition">☰</button>
      </div>
    `;

    const menuContainer = nav.querySelector('#dynamic-menu')!;
    const menu = new DynamicMenu(this.menuItems);
    menuContainer.appendChild(menu.render());

    const switcher = nav.querySelector('#platform-switcher') as HTMLSelectElement;
    switcher?.addEventListener('change', (e) => {
      const platform = (e.target as HTMLSelectElement).value;
      localStorage.setItem('dramain_platform', platform);
      window.location.href = `/${platform}/`;
    });

    return nav;
  }
}
