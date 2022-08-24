import { Injectable } from '@nestjs/common';
import { CreateSaludoDto } from './dto/create-saludo.dto';
import { UpdateSaludoDto } from './dto/update-saludo.dto';
import { Saludo } from './entities/saludo.entity';

@Injectable()
export class SaludoService {
  saludos: Saludo[] = [
    {
      texto: 'Hola',
      emoji: '👋',
    },
  ];

  create(createSaludoDto: CreateSaludoDto): Saludo[] {
    this.saludos.push(createSaludoDto);
    return this.saludos;
  }

  findAll(): Saludo[] {
    return this.saludos;
  }

  findOne(id: number) {
    return this.saludos[id];
  }

  update(id: number, updateSaludoDto: UpdateSaludoDto): Saludo {
    if (updateSaludoDto.texto) {
      this.saludos[id].texto = updateSaludoDto.texto;
    }
    if (updateSaludoDto.emoji) {
      this.saludos[id].emoji = updateSaludoDto.emoji;
    }
    return this.saludos[id];
  }

  remove(id: number) {
    this.saludos.splice(id, 1);
    return this.saludos;
  }
}
