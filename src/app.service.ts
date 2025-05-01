import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheDto } from './dto/cache.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setCache(dto: CacheDto) {
    const { email, key, name } = dto;
    const existing = await this.cacheManager.get(key);

    const value = { email, name };

    const newList = Array.isArray(existing) ? [...existing, value] : [value];

    await this.cacheManager.set(key, newList);
    return { message: `Valor adicionado à lista da chave: ${key}` };
  }

  async getCache(key: string) {
    const value = await this.cacheManager.get(key);
    return value ? { key, name: value } : 'Not found';
  }
}
