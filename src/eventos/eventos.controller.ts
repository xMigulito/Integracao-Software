/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('eventos')
export class EventosController {
  constructor(
    private readonly eventosService: EventosService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @Get()
  findAll(
    @Headers('x-api-token') token: string,
    @Query('dia') dia?: string,
    @Query('local') local?: string,
    @Query('cerimonialista') cerimonialista?: string,
  ) {
    if (!token) {
      throw new UnauthorizedException('Token não Enviado');
    }
    this.authService.validateToken(token);

    return this.eventosService.findAll(
      dia ? new Date(dia) : undefined,
      local,
      cerimonialista,
    );
  }

  @Get(':id')
  findOne(@Headers('x-api-token') token: string, @Param('id') id: string) {
    if (!token) {
      throw new UnauthorizedException('Token não Enviado');
    }
    this.authService.validateToken(token);

    return this.eventosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Headers('x-api-token') token: string,
    @Param('id') id: string,
    @Body() updateEventoDto: UpdateEventoDto,
  ) {
    if (!token) {
      throw new UnauthorizedException('Token não Enviado');
    }
    this.authService.validateToken(token);

    return this.eventosService.update(+id, updateEventoDto);
  }

  @Delete(':id')
  remove(@Headers('x-api-token') token: string, @Param('id') id: string) {
    if (!token) {
      throw new UnauthorizedException('Token não Enviado');
    }
    this.authService.validateToken(token);

    return this.eventosService.remove(+id);
  }
}