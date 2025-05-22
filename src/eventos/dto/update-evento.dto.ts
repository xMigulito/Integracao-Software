/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @Type(() => Date)
  @IsDate({ message: 'A data deve ser válida' })
  @IsNotEmpty({ message: 'A data não pode ser vazia' })
  dia?: Date;

  @IsString({ message: 'O local deve ser uma string' })
  @IsNotEmpty({ message: 'O local não pode ser vazio' })
  local?: string;

  @IsString({ message: 'O cerimonialista deve ser uma string' })
  @IsNotEmpty({ message: 'O cerimonialista não pode ser vazio' })
  cerimonialista?: string;
}