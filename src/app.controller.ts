import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheDto } from './dto/cache.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/set-cache')
  setCache(@Body() dto: CacheDto) {
    return this.appService.setCache(dto);
  }

  @Get('/get-cache/:key')
  getCache(@Param('key') key: string) {
    return this.appService.getCache(key);
  }
}
