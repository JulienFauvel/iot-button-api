import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import * as Twitter from 'twit';

@Injectable()
export class TwitterService {
    private readonly logger = new Logger(TwitterService.name);

    private twitterClient: any = null;

    constructor(configService: ConfigService) {
        const consumerKey = configService.get('TWITTER_CONSUMER_KEY');
        const consumerSecret = configService.get('TWITTER_CONSUMER_SECRET');
        const accessTokenKey = configService.get('TWITTER_ACCESS_TOKEN_KEY');
        const accessTokenSecret = configService.get('TWITTER_ACCESS_TOKEN_SECRET');

        this.twitterClient = new Twitter({
            consumer_key: consumerKey,
            consumer_secret: consumerSecret,
            access_token: accessTokenKey,
            access_token_secret: accessTokenSecret,
        });
    }

    async getLastTweet(user: string): Promise<Tweet> {
        this.logger.log('Retrieving tweets of ' + user);

        const response = await this.twitterClient.get('statuses/user_timeline', { screen_name: user, count: 1 });
        const [tweet] = response.data;

        return tweet as Tweet;
    }
}
