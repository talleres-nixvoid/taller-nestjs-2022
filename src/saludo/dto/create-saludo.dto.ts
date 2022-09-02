import { Type } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Saludo } from '../entities/saludo.entity';

export class CreateSaludoDto extends Saludo {
  @IsString({ message: '$property debe ser de tipo cadena' })
  @Length(2, 50, {
    message:
      '$property debe tener entre $constraint1 y $constraint2 caracteres',
  })
  texto: string;

  @IsString({ message: '$property debe ser de tipo cadena' })
  @Length(1, 1, { message: '$property debe ser de $constraint1 caracter' })
  emoji: string;

  @Type(() => Usuario)
  usuario: Usuario;
}
