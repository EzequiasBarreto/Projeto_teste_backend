import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Membro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;
}
