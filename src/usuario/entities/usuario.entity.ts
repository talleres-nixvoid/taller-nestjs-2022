import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Saludo } from '../../saludo/entities/saludo.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  colorFavorito: string;

  @OneToMany(() => Saludo, (saludo) => saludo.usuario)
  saludos: Saludo[];
}
