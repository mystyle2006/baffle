import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExerciseHistory } from './exercise-history.entity';

@Injectable()
export class ExerciseHistoryService {
  constructor(
    @InjectRepository(ExerciseHistory)
    private exerciseHistoryRepository: Repository<ExerciseHistory>,
  ) {}

  findAll(): Promise<ExerciseHistory[]> {
    return this.exerciseHistoryRepository.find({
      relations: ['exercise', 'sets'],
    });
  }

  async create(exerciseIndex: number): Promise<ExerciseHistory | null> {
    try {
      const newHistory = await this.exerciseHistoryRepository.create({
        exercise: {
          index: exerciseIndex,
        },
      });
      const result = await this.exerciseHistoryRepository.save(newHistory);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
