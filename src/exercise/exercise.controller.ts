import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

interface findAll {
  message: string;
  data: Array<Exercise>;
}

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.exerciseService.findAll();
    return {
      message: '운동 목록을 가져왔습니다.',
      data: result,
    };
  }
}
