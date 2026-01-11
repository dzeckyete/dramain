export class Skeleton {
  constructor(private width = '100%', private height = '200px') {}

  public render(): HTMLElement {
    const div = document.createElement('div');
    div.className = 'skeleton';
    div.style.width = this.width;
    div.style.height = this.height;
    return div;
  }

  public static renderGrid(count = 12): HTMLElement {
    const container = document.createElement('div');
    container.className = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4';
    
    for (let i = 0; i < count; i++) {
      const skeleton = new Skeleton('100%', '280px');
      container.appendChild(skeleton.render());
    }
    
    return container;
  }
}
