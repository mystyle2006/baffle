import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExerciseMenu {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  krName: string;

  @Column()
  enName: string;
}
