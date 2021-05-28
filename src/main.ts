import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Habilitar validaciones globales a todos loos payloads que provienen del cliente
  //se crea una interfaz validadora con npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(3000);
}
bootstrap();
//mapps-types  permite mapear los tipos de datos de una propiedad
//para  instalarlo se usa npm i @nestjs/mapped-types