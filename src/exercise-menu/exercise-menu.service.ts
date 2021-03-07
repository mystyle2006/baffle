import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseMenu } from './exercise-menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseMenuService {
  constructor(
    @InjectRepository(ExerciseMenu)
    private exerciseMenuRepository: Repository<ExerciseMenu>,
  ) {}

  findAll(): Promise<ExerciseMenu[]> {
    return this.exerciseMenuRepository.find();
  }
}
