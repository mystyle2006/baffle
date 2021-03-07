import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exercise } from '../exercise/exercise.entity';

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
}
