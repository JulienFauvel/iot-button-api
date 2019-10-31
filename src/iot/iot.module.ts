import { Module } from '@nestjs/common';
import { IotController } from './iot.controller';
import { IotService } from './iot.service';
import { TelegramModule } from '../telegram/telegram.module';
import { TwitterModule } from '../twitter/twitter.module';

@Module({
  controllers: [IotController],
  providers: [IotService],
  imports: [TelegramModule, TwitterModule],
})
export class IotModule {}
