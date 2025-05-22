/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateEventoDto {
  @Type(() => Date)
  @IsDate({ message: 'A data é obrigatória' })
  dia: Date;

  @IsString({ message: 'O local deve ser uma string' })
  @IsNotEmpty({ message: 'O local não pode ser vazio' })
  local: string;

  @IsString({ message: 'O cerimonialista deve ser uma string' })
  @IsNotEmpty({ message: 'O cerimonialista não pode ser vazio' })
  cerimonialista: string;
}