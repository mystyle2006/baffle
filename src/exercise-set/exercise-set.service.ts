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
}
