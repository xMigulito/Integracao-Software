/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDate, IsString } from 'class-validator';

export class CreateEventoDto {

    @IsDate()
    dia: Date 

    @IsString()
    local: string

    @IsString()
    cerimonialista: string

}
