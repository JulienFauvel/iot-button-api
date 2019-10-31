import { Module, HttpModule } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { ConfigModule } from '../config/config.module';

@Module({
  providers: [TwitterService],
  exports: [TwitterService],
  imports: [HttpModule, ConfigModule],
})
export class TwitterModule {}
