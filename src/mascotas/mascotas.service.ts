import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotasService {
  constructor(
    @InjectModel('Mascota') private readonly mascotaModel: Model<Mascota>,
  ) {}

  //Guarda una mascota nueva en la coleccion
  async create(createMascotaDto: CreateMascotaDto) {
    return this.mascotaModel.create(createMascotaDto);
  }

  // Devuelve todas las mascotas
  async findAll() {
    return this.mascotaModel.find();
  }

  // Busca UNA mascota por su _id
  async findOne(id: string) {
    this.validarId(id);
    const mascota = await this.mascotaModel.findById(id);
    if (!mascota) {
      throw new NotFoundException(`No existe una mascota con el id ${id}`);
    }
    return mascota;
  }

  // Revisa que el id tenga el formato de MongoDB
  private validarId(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`"${id}" no es un id válido`);
    }
  }

  // Cambia los campos enviados y devuelve la mascota actualizada
  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    this.validarId(id);
    const mascota = await this.mascotaModel.findByIdAndUpdate(
      id,
      updateMascotaDto,
      { returnDocument: 'after', runValidators: true },
    );
    if (!mascota) {
      throw new NotFoundException(`No existe una mascota con el id ${id}`);
    }
    return mascota;
  }
}
