import { Controller, Get } from '@nestjs/common';
import { ExerciseSetService } from './exercise-set.service';
import { ExerciseSet } from './exercise-set.entity';

interface findAll {
  message: string;
  data: Array<ExerciseSet>;
}

@Controller('exercise-set')
export class ExerciseSetController {
  constructor(private readonly exerciseSetService: ExerciseSetService) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.exerciseSetService.findAll();
    return {
      message: '메뉴를 불러왔습니다.',
      data: result,
    };
  }
}
