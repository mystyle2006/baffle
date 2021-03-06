import { Controller, Get } from '@nestjs/common';
import { ExerciseMenuService, response } from './exercise-menu.service';

@Controller('exercise-menu')
export class ExerciseMenuController {
  constructor(private readonly exerciseMenuService: ExerciseMenuService) {}

  @Get()
  findAll(): response {
    return this.exerciseMenuService.findAll();
  }
}
