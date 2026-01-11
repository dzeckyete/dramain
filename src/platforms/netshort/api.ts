import { BaseAPI } from '../../core/api/base-api.js';
import { PLATFORM_CONFIG } from './config.js';

export class NetShortAPI extends BaseAPI {
  protected baseUrl = PLATFORM_CONFIG.api.baseUrl;
  protected lang = PLATFORM_CONFIG.lang;

  async getHome(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.discover, { page, limit });
  }

  async searchDrama(query: string, page = 1) {
    return this.request(PLATFORM_CONFIG.api.find, { q: query, page });
  }

  async getCategories() {
    return this.request(PLATFORM_CONFIG.api.categories);
  }

  async getDramaDetail(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.info}/${id}`);
  }
}

