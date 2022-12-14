import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { MyLogger } from './config';
import { RATE_LIMIT_MAX } from './environments';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: new MyLogger(),
    });

    const config = new DocumentBuilder()
      .setTitle('cr-nest-ang project')
      .setVersion('1.0.0')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.use(helmet());

    app.use(bodyParser.json({ limit: '50mb'}))
    app.use(bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000
    }))

    app.use(rateLimit({
      windowMs: 1000 * 60 * 60, // an hour
      max: RATE_LIMIT_MAX, // limit each IP to 100 requests per windowMs
      message: 'Too many request created from this IP, please try again after an hour'
    }))

    app.enableCors();

		app.enableShutdownHooks()    

    await app.listen(3000);

  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`);
  }
}
bootstrap().catch(error => {
  Logger.error(`❌  Error starting server, ${error}`)
  throw error
});
