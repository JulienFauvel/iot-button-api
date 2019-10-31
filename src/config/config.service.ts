import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    this.envConfig = {
      ...process.env,
    };

    try {
      this.envConfig = {
        ...this.envConfig,
        ...dotenv.parse(fs.readFileSync('.env')),
      };
    // tslint:disable-next-line: no-empty
    } catch (err) {}
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
