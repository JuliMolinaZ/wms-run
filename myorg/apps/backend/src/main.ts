import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir solicitudes desde el origen deseado (por ejemplo, localhost:8081)
  app.enableCors({
    origin: 'http://localhost:8081', // Puedes ajustar este valor según tu entorno
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
