import { Module, HttpModule } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
