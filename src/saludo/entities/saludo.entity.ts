import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Saludo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @Column()
  emoji: string;
}
