import { BaseAPI } from '../../core/api/base-api.js';
import { PLATFORM_CONFIG } from './config.js';

export class RadReelAPI extends BaseAPI {
  protected baseUrl = PLATFORM_CONFIG.api.baseUrl;
  protected lang = PLATFORM_CONFIG.lang;

  async getHome(page = 1, limit = 20) {
    return this.request(PLATFORM_CONFIG.api.home, { page, limit });
  }

  async searchDrama(query: string, page = 1) {
    return this.request(PLATFORM_CONFIG.api.search, { q: query, page });
  }

  async getRanking(type = 1, page = 1) {
    return this.request(PLATFORM_CONFIG.api.rank, { type, page });
  }

  async getDramaDetail(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.drama}/${id}`);
  }

  async getEpisodes(id: string) {
    return this.request(`${PLATFORM_CONFIG.api.episodes}/${id}`);
  }

  async getVideoUrl(videoFakeId: string, seq = 0) {
    return this.request(`${PLATFORM_CONFIG.api.play}/${videoFakeId}`, { seq });
  }

  async getRecommendations() {
    return this.request(PLATFORM_CONFIG.api.recommend);
  }
}
