import { BaseAPI } from '../../core/api/base-api.js';
import { PLATFORM_CONFIG } from './config.js';

export class FlickReelsAPI extends BaseAPI {
  protected baseUrl = PLATFORM_CONFIG.api.baseUrl;
  protected lang = PLATFORM_CONFIG.lang;

  async getHome(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.home, { page, limit });
  }

  async getLatest(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.latest, { page, limit });
  }

  async searchDrama(query: string, page = 1) {
    return this.request(PLATFORM_CONFIG.api.search, { q: query, page });
  }

  async getTrending(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.trending, { page, limit });
  }

  async getDramaDetail(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.drama}/${id}`);
  }
}
