import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheDto } from './dto/cache.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setCache(dto: CacheDto) {
    const { key, name } = dto;
    await this.cacheManager.set(key, name, 600);
  }

  async getCache(key: string) {
    const value = await this.cacheManager.get(key);
    return value ? { key, name: value } : 'Not found';
  }
}
