/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {

    @Type(() => Date)
     @IsDate({ message: 'A data é obrigatória' })
     dia: Date;
   
     @IsString({ message: 'O local deve ser uma string' })
     local: string;
   
     @IsString({ message: 'O cerimonialista deve ser uma string' })
     cerimonialista: string;

}
