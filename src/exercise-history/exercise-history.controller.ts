import { Controller, Get } from '@nestjs/common';
import { ExerciseHistoryService } from './exercise-history.service';
import { ExerciseHistory } from './exercise-history.entity';

interface findAll {
  message: string;
  data: Array<ExerciseHistory>;
}

@Controller('exercise-history')
export class ExerciseHistoryController {
  constructor(
    private readonly exerciseHistoryService: ExerciseHistoryService,
  ) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.exerciseHistoryService.findAll();
    return {
      message: '운동 이력을 모두 가져왔습니다.',
      data: result,
    };
  }
}
