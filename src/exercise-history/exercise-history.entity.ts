import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exercise } from '../exercise/exercise.entity';
import { ExerciseSet } from '../exercise-set/exercise-set.entity';

@Entity()
export class ExerciseHistory {
  @PrimaryGeneratedColumn()
  index: number;

  @OneToOne(() => Exercise)
  @JoinColumn()
  exerciseInfo: Exercise;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @OneToMany(() => ExerciseSet, (exerciseSet) => exerciseSet.history)
  sets: ExerciseSet[];
}
