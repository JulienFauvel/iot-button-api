import { Controller, HttpCode, Query, Get } from '@nestjs/common';
import { IotService } from './iot.service';

@Controller()
export class IotController {
    constructor(private readonly iotService: IotService) {}

    @Get()
    @HttpCode(200)
    sendLatestTweet(@Query('user') user: string): Promise<void> {
        return this.iotService.sendLastTweet(user);
    }
}
