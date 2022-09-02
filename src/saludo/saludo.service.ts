import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { CreateSaludoDto } from './dto/create-saludo.dto';
import { UpdateSaludoDto } from './dto/update-saludo.dto';
import { Saludo } from './entities/saludo.entity';
import { SaludoNoEncontrado } from './exceptions/saludo-no-encontrado.exception';
import { SaludoSinEmojiException } from './exceptions/saludo-sin-emoji.exception';
import { SaludoSinTextoException } from './exceptions/saludo-sin-texto.expection';

@Injectable()
export class SaludoService {
  constructor(
    @InjectRepository(Saludo)
    private readonly saludoRepository: Repository<Saludo>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createSaludoDto: CreateSaludoDto): Promise<Saludo> {
    if (!createSaludoDto.emoji) {
      throw new SaludoSinEmojiException();
    }
    if (!createSaludoDto.texto) {
      throw new SaludoSinTextoException();
    }
    const usuario = new Usuario();
    usuario.nombre = createSaludoDto.usuario.nombre;
    usuario.colorFavorito = createSaludoDto.usuario.colorFavorito;
    await this.dataSource.manager.save(usuario);
    createSaludoDto.usuario = usuario;
    return this.saludoRepository.save(createSaludoDto);
  }

  findAll(): Promise<Saludo[]> {
    return this.saludoRepository.find({
      order: {
        id: 'ASC',
      },
      relations: {
        usuario: true,
      },
    });
  }

  async findOne(id: number) {
    const saludo = await this.saludoRepository.findOneBy({ id });
    if (!saludo) {
      throw new SaludoNoEncontrado(id);
    }
    return saludo;
  }

  update(id: number, updateSaludoDto: UpdateSaludoDto): Promise<Saludo> {
    return this.saludoRepository.save({
      id,
      ...updateSaludoDto,
    });
  }

  async remove(id: number) {
    await this.saludoRepository.delete({ id });
  }
}
