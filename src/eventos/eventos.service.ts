/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Agenda } from '@prisma/client';

@Injectable()
export class EventosService {
  constructor(private prisma: PrismaService) {}
  async create(createEventoDto: CreateEventoDto) : Promise<Agenda>{
    const agenda = await this.prisma.agenda.create({
      data: createEventoDto,
    })
    return this.mapToEntity(agenda);
  }

  async findAll(): Promise<Agenda[]> {
    const agenda = await this.prisma.agenda.findMany();
    return agenda.map((agenda) => this.mapToEntity(agenda));
  }

  private mapToEntity(agenda: any): Agenda {
    return {
      id: agenda.id,
      dia: agenda.dia,
      local: agenda.local,
      cerimonialista: agenda.cerimonialista,
    };
  }

  async findOne(id: number) {
    const agenda = await this.prisma.agenda.findUnique({
      where: {
        id: id,
      },
    })
    return this.mapToEntity(agenda);
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
