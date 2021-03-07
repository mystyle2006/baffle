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
    return this.exerciseHistoryRepository.find({ relations: ['exerciseInfo'] });
  }
}
