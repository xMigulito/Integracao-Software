/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  constructor(private prisma: PrismaService) {}
  async create(createEventoDto: CreateEventoDto) : Promise<Evento>{
    const agenda = await this.prisma.agenda.create({
      data: createEventoDto,
    })
    return this.mapToEntity(agenda);
  }

  async findAll(): Promise<Evento[]> {
    const agenda = await this.prisma.agenda.findMany();
    return agenda.map((agenda) => this.mapToEntity(agenda));
  }

  private mapToEntity(agenda: any): Evento {
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

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    const agenda = await this.prisma.agenda.update({
      where: { id: id },
      data: updateEventoDto,
    })
    return this.mapToEntity(agenda);
  }

  async remove(id: number) {
    const agenda = await this.prisma.agenda.delete({
      where: { id: id },
    })
    return this.mapToEntity(agenda);
  }
}
