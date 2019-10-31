import { Injectable } from '@nestjs/common';
import { TelegramService } from '../telegram/telegram.service';
import { TwitterService } from '../twitter/twitter.service';

@Injectable()
export class IotService {
    constructor(
        private readonly telegramService: TelegramService,
        private readonly twitterService: TwitterService,
    ) {}

    async sendLastTweet(user: string): Promise<any> {
        const tweet = await this.twitterService.getLastTweet(user);

        return this.telegramService.sendMessage({
            text: tweet.text,
            link: '',
            createdAt: tweet.created_at,
        });
    }
}
