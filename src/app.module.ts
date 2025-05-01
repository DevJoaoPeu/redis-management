import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [UsersModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
