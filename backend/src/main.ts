import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import * as cookiesParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(cookiesParser());
  const configService: ConfigService = app.get(ConfigService);
  const PORT: number = Number.parseInt(configService.get<string>("TODOLISTIFY_PORT"))
  const logger: Logger = new Logger('bootstrap', {timestamp: true});
  logger.log(`App running on ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
