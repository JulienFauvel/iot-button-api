import { Module } from '@nestjs/common';
import { IotModule } from './iot/iot.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [IotModule, TelegramModule, ConfigModule, TwitterModule],
  providers: [ConfigService],
})
export class AppModule {}
