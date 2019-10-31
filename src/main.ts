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

  const PORT = Number.parseInt(process.env.PORT, 10) || 8080;
  await app.listen(PORT, '0.0.0.0');
  logger.log(`Application started on port ${PORT}`);
}
bootstrap();
