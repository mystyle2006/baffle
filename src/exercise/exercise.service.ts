import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  async updateHit(index): Promise<boolean> {
    try {
      const exercise = await this.exerciseRepository.findOne(index);
      exercise.hit = exercise.hit + 1;
      await this.exerciseRepository.save(exercise);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
