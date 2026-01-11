export class AppRouter {
  constructor(private platformId: string) {}

  public init(): void {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  private handleRoute(): void {
    const hash = window.location.hash.slice(2) || 'home';
    const page = hash.split('/')[0];
    
    const content = document.getElementById('app-content');
    if (!content) return;

    console.log(`📍 Route: ${page}`);

    switch (page) {
      case 'home':
        this.loadHome(content);
        break;
      case 'search':
        this.loadSearch(content);
        break;
      default:
        this.loadHome(content);
    }
  }

  private loadHome(container: HTMLElement): void {
    container.innerHTML = `
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6">Welcome to ${(window as any).platform?.name || 'Platform'}</h2>
        <p class="text-gray-400 mb-8">Loading content...</p>
        <div id="drama-grid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"></div>
      </div>
    `;

    const api = (window as any).api;
    if (api && api.getHome) {
      api.getHome(1, 12).then((data: any) => {
        const grid = document.getElementById('drama-grid');
        if (grid) {
          grid.innerHTML = '';
          const dramas = data?.data || [];
          if (dramas.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-gray-400">No content available</p>';
          } else {
            dramas.slice(0, 12).forEach((drama: any) => {
              const card = document.createElement('div');
              card.className = 'card cursor-pointer group';
              card.innerHTML = `
                <div class="relative overflow-hidden h-64 bg-secondary">
                  <img 
                    src="${drama.poster || drama.image || drama.thumbnail || 'https://via.placeholder.com/150x225'}" 
                    alt="${drama.title || drama.name}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    onerror="this.src='https://via.placeholder.com/150x225'"
                  />
                </div>
                <div class="p-3">
                  <h3 class="font-bold text-sm line-clamp-2">${drama.title || drama.name || 'Unknown'}</h3>
                </div>
              `;
              grid.appendChild(card);
            });
          }
        }
      }).catch((err: any) => {
        console.error('Error loading home:', err);
      });
    }
  }

  private loadSearch(container: HTMLElement): void {
    container.innerHTML = `
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6">Search Drama</h2>
        <input 
          type="text" 
          id="search-input"
          placeholder="Search drama..."
          class="w-full md:w-1/3 px-4 py-2 rounded-lg bg-secondary border border-white/20 mb-8"
        />
        <div id="search-results" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"></div>
      </div>
    `;

    const input = container.querySelector('#search-input') as HTMLInputElement;
    const api = (window as any).api;

    if (input && api && api.searchDrama) {
      input.addEventListener('keyup', (e: any) => {
        const query = e.target.value;
        if (query.length > 1) {
          api.searchDrama(query, 1).then((data: any) => {
            const results = container.querySelector('#search-results');
            if (results) {
              results.innerHTML = '';
              const dramas = data?.data || [];
              dramas.slice(0, 12).forEach((drama: any) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                  <div class="relative overflow-hidden h-64 bg-secondary">
                    <img 
                      src="${drama.poster || drama.image || drama.thumbnail || 'https://via.placeholder.com/150x225'}" 
                      alt="${drama.title || drama.name}"
                      class="w-full h-full object-cover"
                      onerror="this.src='https://via.placeholder.com/150x225'"
                    />
                  </div>
                  <div class="p-3">
                    <h3 class="font-bold text-sm line-clamp-2">${drama.title || drama.name || 'Unknown'}</h3>
                  </div>
                `;
                results.appendChild(card);
              });
            }
          });
        }
      });
    }
  }
}
