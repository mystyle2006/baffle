import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ExerciseSetService } from './exercise-set.service';
import { ExerciseSet } from './exercise-set.entity';

interface findAll {
  message: string;
  data: Array<ExerciseSet>;
}

interface create {
  message: string;
  data: ExerciseSet;
}

@Controller('exercise-set')
export class ExerciseSetController {
  constructor(private readonly exerciseSetService: ExerciseSetService) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.exerciseSetService.findAll();
    return {
      message: '세트를 불러왔습니다.',
      data: result,
    };
  }

  @Post()
  async create(@Req() request: Request): Promise<create> {
    const { count, weight, order, historyIndex } = request.body;
    const result = await this.exerciseSetService.create(
      weight,
      count,
      order,
      historyIndex,
    );
    if (!result) {
      return {
        message: '세트를 생성하지 못하였습니다.',
        data: null,
      };
    }

    return {
      message: '세트를 생성하였습니다.',
      data: result,
    };
  }
}
