import { Controller, Get } from '@nestjs/common';
import { ExerciseMenuService } from './exercise-menu.service';
import { ExerciseMenu } from './exercise-menu.entity';

interface findAll {
  message: string;
  data: Array<ExerciseMenu>;
}

@Controller('exercise-menu')
export class ExerciseMenuController {
  constructor(private readonly exerciseMenuService: ExerciseMenuService) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.exerciseMenuService.findAll();
    return {
      message: '메뉴를 불러왔습니다.',
      data: result,
    };
  }
}
