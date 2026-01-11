import { BaseAPI } from '../../core/api/base-api.js';
import { PLATFORM_CONFIG } from './config.js';

export class DramaBoxAPI extends BaseAPI {
  protected baseUrl = PLATFORM_CONFIG.api.baseUrl;
  protected lang = PLATFORM_CONFIG.lang;

  async getHome(page = 1, limit = 20) {
    const homeEndpoint = Object.values(PLATFORM_CONFIG.api).find(v => typeof v === 'string' && v.includes('home'));
    return this.request(homeEndpoint || '/home', { page, limit });
  }

  async searchDrama(query: string, page = 1) {
    const searchEndpoint = Object.values(PLATFORM_CONFIG.api).find(v => typeof v === 'string' && v.includes('search'));
    return this.request(searchEndpoint || '/search', { q: query, page });
  }

  async getDramaDetail(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.drama || '/drama'}/${id}`);
  }
}
