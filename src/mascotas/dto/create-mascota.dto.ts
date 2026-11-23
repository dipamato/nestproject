import {
  IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional,
  IsString, IsUrl, MaxLength, Min,
} from 'class-validator';
 
export class CreateMascotaDto {
  @IsString({ message: 'El nombre debe ser texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;
 
  @IsIn(['perro', 'gato', 'otro'], { message: 'La especie debe ser perro, gato u otro' })
  especie: string;
 
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(0, { message: 'La edad no puede ser negativa' })
  edad: number;
 
  @IsIn(['macho', 'hembra'], { message: 'El sexo debe ser macho o hembra' })
  sexo: string;
 
  @IsIn(['pequeño', 'mediano', 'grande'], { message: 'El tamaño debe ser pequeño, mediano o grande' })
  tamano: string;
 
  @IsOptional()
  @IsBoolean({ message: 'Vacunada debe ser true o false' })
  vacunada?: boolean;
 
  @IsOptional()
  @IsString({ message: 'La descripción debe ser texto' })
  @MaxLength(300, { message: 'La descripción admite máximo 300 caracteres' })
  descripcion?: string;
 
  @IsOptional()
  @IsUrl({}, { message: 'fotoUrl debe ser una URL válida' })
  fotoUrl?: string;
}
