export class DynamicMenu {
  constructor(private menuItems: string[]) {}

  public render(): HTMLElement {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'hidden md:flex gap-4 text-sm';

    const menuMap: Record<string, { href: string; label: string; icon: string }> = {
      home: { href: '#/home', label: 'Home', icon: '🏠' },
      latest: { href: '#/latest', label: 'Latest', icon: '🆕' },
      search: { href: '#/search', label: 'Search', icon: '🔍' },
      rank: { href: '#/rank', label: 'Ranking', icon: '🏆' },
      ranking: { href: '#/ranking', label: 'Ranking', icon: '🏆' },
      bookmark: { href: '#/bookmark', label: 'Bookmarks', icon: '❤️' },
      book: { href: '#/book', label: 'Bookmarks', icon: '❤️' },
      trending: { href: '#/trending', label: 'Trending', icon: '🔥' },
      exchange: { href: '#/exchange', label: 'Exchange', icon: '🔄' },
      categories: { href: '#/categories', label: 'Categories', icon: '📂' },
      collections: { href: '#/collections', label: 'Collections', icon: '📚' },
      discover: { href: '#/discover', label: 'Discover', icon: '✨' },
      meta: { href: '#/meta', label: 'Meta', icon: '⚙️' },
      episodes: { href: '#/episodes', label: 'Episodes', icon: '📺' },
      batch: { href: '#/batch', label: 'Batch', icon: '📦' },
      unlock: { href: '#/unlock', label: 'Unlock', icon: '🔓' },
      tabs: { href: '#/tabs', label: 'Tabs', icon: '📑' },
      episode: { href: '#/episode', label: 'Episode', icon: '📺' },
      feed: { href: '#/feed', label: 'Feed', icon: '📰' },
      play: { href: '#/play', label: 'Play', icon: '▶️' },
      foryou: { href: '#/foryou', label: 'For You', icon: '👤' },
      classify: { href: '#/classify', label: 'Classify', icon: '🏷️' },
      watch: { href: '#/watch', label: 'Watch', icon: '👀' },
      program: { href: '#/program', label: 'Program', icon: '📋' },
      list: { href: '#/list', label: 'List', icon: '📋' },
      drama: { href: '#/drama', label: 'Drama', icon: '🎬' },
      detail: { href: '#/detail', label: 'Detail', icon: 'ℹ️' },
      video: { href: '#/video', label: 'Video', icon: '🎥' },
      recommend: { href: '#/recommend', label: 'Recommend', icon: '⭐' },
      init: { href: '#/init', label: 'Init', icon: '⚡' },
      browse: { href: '#/browse', label: 'Browse', icon: '🌍' }
    };

    menuContainer.innerHTML = this.menuItems
      .map(item => {
        const menu = menuMap[item];
        return menu ? `<a href="${menu.href}" class="hover:text-accent transition font-medium">${menu.icon} ${menu.label}</a>` : '';
      })
      .filter(html => html !== '')
      .join('');

    return menuContainer;
  }
}
