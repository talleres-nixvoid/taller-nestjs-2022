import { Saludo } from '../entities/saludo.entity';

export class CreateSaludoDto extends Saludo {
  texto: string;
  emoji: string;
}
