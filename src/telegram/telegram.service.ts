import { Injectable, HttpService, Logger } from '@nestjs/common';

import { ConfigService } from '../config/config.service';

const TELEGRAM_URL = 'https://api.telegram.org';

@Injectable()
export class TelegramService {
    private readonly logger = new Logger(TelegramService.name);
    private botToken: string;
    private chatId: string;

    constructor(private readonly httpService: HttpService, configService: ConfigService) {
        this.botToken = configService.get('BOT_TOKEN');
        this.chatId = configService.get('CHAT_ID');
    }

    async sendMessage(message: TelegramMessage): Promise<any> {
        const text = message.text;
        this.logger.log(`Sending PM through Telegram to user ${this.chatId} : ${text}`);
        const response = await this.httpService.post(`${TELEGRAM_URL}/${this.botToken}/sendMessage`, {
            chat_id: this.chatId,
            text,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).toPromise();

        const telegramResponse = response.data;
        return {
            ok: telegramResponse.ok,
        };
    }
}
