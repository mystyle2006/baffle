import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ExerciseHistoryService } from './exercise-history.service';
import { ExerciseHistory } from './exercise-history.entity';

interface findAll {
  message: string;
  data: Array<ExerciseHistory>;
}

interface create {
  message: string;
  data: ExerciseHistory | null;
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

  @Post()
  async create(@Req() request: Request): Promise<create> {
    const { exerciseIndex } = request.body;
    const result = await this.exerciseHistoryService.create(exerciseIndex);
    if (!result) {
      return {
        message: '운동 이력을 생성하지 못하였습니다.',
        data: result,
      };
    }

    return {
      message: '운동 이력을 생성하였습니다.',
      data: result,
    };
  }
}
