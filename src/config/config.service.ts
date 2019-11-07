import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    this.envConfig = {};
    Object.keys(process.env).forEach(key => {
      this.envConfig[key] = process.env[key] || '';
    });

    try {
      const dotEnvContent = dotenv.parse(fs.readFileSync('.env'));
      Object.keys(dotEnvContent).forEach(key => {
        this.envConfig[key] = dotEnvContent[key] || '';
      });
    // tslint:disable-next-line: no-empty
    } catch (err) {}
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
