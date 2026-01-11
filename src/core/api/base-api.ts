export class BaseAPI {
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
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        url.searchParams.set(k, String(v));
      }
    });

    console.log(`🌐 [${this.constructor.name}] ${url.toString()}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal,
        mode: 'cors'
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error(`HTTP ${response.status}:`, response.statusText);
        return { data: [] } as T;
      }
      
      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      console.error(`[${this.constructor.name}] Error:`, error);
      return { data: [] } as T;
    }
  }

  abstract getHome(page?: number, limit?: number): Promise<any>;
  abstract searchDrama(query: string, page?: number): Promise<any>;
  abstract getDramaDetail(id: string): Promise<any>;
}
