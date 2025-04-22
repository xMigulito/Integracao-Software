/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/* eslint-disable prettier/prettier */
@Injectable()
export class PrismaService 
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleDestroy() {
      throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }

  async OnModuleDestroy() {
    await this.$disconnect();
  }
}
