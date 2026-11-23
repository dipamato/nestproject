import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  metodoPersonalizado(): string{
    return "Hola aprendices de la ficha 3231108"
  }
}

