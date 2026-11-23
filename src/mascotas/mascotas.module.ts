import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mongoose } from 'mongoose';
import { MascotaSchema } from './entities/mascota.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Mascota', schema: MascotaSchema}])
  ],
  providers: [MascotasService],
  controllers: [MascotasController]
})
export class MascotasModule {}
