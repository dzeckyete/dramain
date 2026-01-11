export class DramaCard {
  constructor(
    private drama: any,
    private onClick?: (drama: any) => void
  ) {}

  public render(): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card cursor-pointer group';
    
    const posterUrl = this.drama.poster || this.drama.image || this.drama.thumbnail || 'https://via.placeholder.com/150x225?text=No+Image';
    const title = this.drama.title || this.drama.name || 'Unknown';
    
    card.innerHTML = `
      <div class="relative overflow-hidden h-64 bg-secondary">
        <img 
          src="${posterUrl}" 
          alt="${title}"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onerror="this.src='https://via.placeholder.com/150x225?text=No+Image'"
        />
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button class="bg-accent text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition">
            ▶️ Watch
          </button>
        </div>
      </div>
      <div class="p-3">
        <h3 class="font-bold text-sm line-clamp-2 hover:text-accent transition">${title}</h3>
        <p class="text-xs text-gray-400 mt-1">${this.drama.status || 'Unknown'}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      if (this.onClick) {
        this.onClick(this.drama);
      }
    });

    return card;
  }
}
