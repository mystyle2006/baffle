import { Controller, Get } from '@nestjs/common';
import { ExerciseService, defaultResponse } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  findAll(): defaultResponse {
    return this.exerciseService.getMenuList();
  }
}
