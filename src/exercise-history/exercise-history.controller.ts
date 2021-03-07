import { Controller, Get } from '@nestjs/common';
import { ExerciseHistoryService, response } from './exercise-history.service';

@Controller('exercise-history')
export class ExerciseHistoryController {
  constructor(
    private readonly exerciseHistoryService: ExerciseHistoryService,
  ) {}

  @Get()
  findAll(): response {
    return this.exerciseHistoryService.findAll();
  }
}
