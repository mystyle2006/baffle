import { Controller, Get } from '@nestjs/common';
import { ExerciseService, response } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  findAll(): response {
    return this.exerciseService.findAll();
  }
}
