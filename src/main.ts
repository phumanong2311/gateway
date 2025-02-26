import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appConfig.app.port);
  const config = new DocumentBuilder()
    .setTitle('Microservices API')
    .setDescription('API documentation for microservices')
    .setVersion('1.0')
    .addTag('gateway')
    .build();

  // Tạo tài liệu Swagger cho API Gateway
  const document = SwaggerModule.createDocument(app, config);

  // Kích hoạt Swagger UI tại /api-docs
  SwaggerModule.setup('api-docs', app, document);
}
bootstrap();
