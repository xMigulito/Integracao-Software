/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {

    @IsDate()
    dia: Date 

    @IsString()
    local: string
    
    @IsString()
    cerimonialista: string

}
