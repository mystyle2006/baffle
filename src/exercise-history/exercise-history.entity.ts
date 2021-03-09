import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, ManyToOne,
} from 'typeorm';
import { Exercise } from '../exercise/exercise.entity';
import { ExerciseSet } from '../exercise-set/exercise-set.entity';

@Entity()
export class ExerciseHistory {
  @PrimaryGeneratedColumn()
  index: number;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @ManyToOne(() => Exercise, (exercise) => exercise.history)
  exercise: Exercise;

  @OneToMany(() => ExerciseSet, (exerciseSet) => exerciseSet.history)
  sets: ExerciseSet[];
}
