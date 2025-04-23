/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EventosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
