import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  conteudo: string;

  @Column()
  autor: string;
}
