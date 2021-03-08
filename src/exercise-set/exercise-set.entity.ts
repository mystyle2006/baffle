import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ExerciseHistory } from '../exercise-history/exercise-history.entity';

@Entity()
export class ExerciseSet {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  weight: number;

  @Column()
  count: number;

  @Column()
  order: number;

  @ManyToOne(() => ExerciseHistory, (exerciseHistory) => exerciseHistory.sets)
  history: ExerciseHistory;
}
