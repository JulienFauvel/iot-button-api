import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const PORT = Number.parseInt(process.env.PORT || '8080', 10);
  const HOST = process.env.HOST || '0.0.0.0';

  await app.listen(PORT, HOST);
  logger.log(`Application started on port ${PORT}`);
}
bootstrap();
