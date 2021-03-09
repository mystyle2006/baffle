import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseSet } from './exercise-set.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseSetService {
  constructor(
    @InjectRepository(ExerciseSet)
    private exerciseSetRepository: Repository<ExerciseSet>,
  ) {}

  findAll(): Promise<ExerciseSet[]> {
    return this.exerciseSetRepository.find();
  }

  create(
    weight: number,
    count: number,
    order: number,
    historyIndex: number,
  ): Promise<ExerciseSet | null> {
    try {
      const newSet = this.exerciseSetRepository.create({
        weight,
        count,
        order,
        history: {
          index: historyIndex,
        },
      });
      const result = this.exerciseSetRepository.save(newSet);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
