import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { isValidObjectId } from 'mongoose';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('ruta1')
export class MascotasController {

    constructor( private readonly mascotaService: MascotasService){}

    @Post()
    create (@Body() createMascotaDto: CreateMascotaDto){
        return this.mascotaService.create(createMascotaDto)
    }

    @Get('consultar')
    findAll(){
        return this.mascotaService.findAll()
    }
    
     @Get(':id')
    findOne(@Param('id') id: string) {
    return this.mascotaService.findOne(id);
  }

   @Patch(':id')
  update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.mascotaService.update(id, updateMascotaDto);
  }


}
