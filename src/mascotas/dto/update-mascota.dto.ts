import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsOptional } from 'class-validator';
import { CreateMascotaDto } from './create-mascota.dto';
 
export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
  @IsOptional()
  @IsIn(['disponible', 'en proceso', 'adoptada'], {
    message: 'El estado debe ser disponible, en proceso o adoptada',
  })
  estado?: string;
}
