import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { OtherExceptionFilter } from './filter/other-exception.filter';

const PORT = 3001;

const API_PREFIX = '/api';
const VERSION = 'v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${API_PREFIX}/${VERSION}`);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new OtherExceptionFilter(), new HttpExceptionFilter());

  await app.listen(PORT);
}
bootstrap();
