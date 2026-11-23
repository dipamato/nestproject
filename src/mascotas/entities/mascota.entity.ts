import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Mascota {
  @Prop({ required: true, trim: true })
  nombre: string;
 
  @Prop({ required: true, enum: ['perro', 'gato', 'otro'] })
  especie: string;
 
 // @Prop({ required: true, min: 0 })
  edad: number;
 
  @Prop({ required: true, enum: ['macho', 'hembra'] })
  sexo: string;
 
  @Prop({ required: true, enum: ['pequeño', 'mediano', 'grande'] })
  tamano: string;
 
  @Prop({ default: false })
  vacunada: boolean;

    @Prop({ trim: true })
  descripcion?: string;
 
  @Prop()
  fotoUrl?: string;
 
  @Prop({ default: 'disponible', enum: ['disponible', 'en proceso', 'adoptada'] })
  estado: string;
 
  @Prop({ default: Date.now })
  fechaIngreso: Date;
}
 
export const MascotaSchema = SchemaFactory.createForClass(Mascota);
