import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Saludo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @Column()
  emoji: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.saludos)
  usuario: Usuario;
}
