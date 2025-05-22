/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  constructor(private prisma: PrismaService) {}

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const agenda = await this.prisma.agenda.create({
      data: createEventoDto,
    });
    return this.mapToEntity(agenda);
  }

  async findAll(
    dia?: Date,
    local?: string,
    cerimonialista?: string,
  ): Promise<Evento[]> {
    const agenda = await this.prisma.agenda.findMany({
      where: {
        ...(local && {
          local: {
            contains: local,
            mode: 'insensitive',
          },
        }),
        ...(cerimonialista && {
          cerimonialista: {
            contains: cerimonialista,
            mode: 'insensitive',
          },
        }),
        ...(dia && {
          dia: {
            gte: dia,
          },
        }),
      },
      orderBy: [
        {
          id: 'asc',
        },
      ],
    });

    console.log('agenda', agenda);

    if (agenda.length === 0) {
      throw new NotFoundException('Evento não encontrado');
    }

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
    });

    if (agenda === null) {
      throw new NotFoundException('Evento não encontrado');
    }

    return this.mapToEntity(agenda);
  }

  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    const agendaExists = await this.prisma.agenda.findUnique({
      where: { id: id },
    });

    if (!agendaExists) {
      throw new NotFoundException('Evento não encontrado');
    }

    const agenda = await this.prisma.agenda.update({
      where: { id: id },
      data: updateEventoDto,
    });
    return this.mapToEntity(agenda);
  }

  async remove(id: number): Promise<string> {
    const agendaExists = await this.prisma.agenda.findUnique({
      where: { id: id },
    });

    if (!agendaExists) {
      throw new NotFoundException('Evento não encontrado');
    }

    await this.prisma.agenda.delete({
      where: { id: id },
    });

    return 'Evento removido com sucesso';
  }
}