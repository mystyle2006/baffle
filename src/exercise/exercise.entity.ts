import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExerciseHistory } from '../exercise-history/exercise-history.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  krName: string;

  @Column()
  enName: string;

  @Column({ default: 0 })
  hit: number;

  @Column({ nullable: true })
  imageUrl: string;

  @OneToMany(
    () => ExerciseHistory,
    (exerciseHistory) => exerciseHistory.exercise,
  )
  history: ExerciseHistory[];
}
