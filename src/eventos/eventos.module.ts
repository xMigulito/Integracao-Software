/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [EventosController],
  providers: [EventosService, PrismaService, AuthService],
})
export class EventosModule {}
