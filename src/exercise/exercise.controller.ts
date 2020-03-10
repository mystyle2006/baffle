import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

interface findAll {
  message: string;
  data: Array<Exercise>;
}

interface updateHit {
  message: string;
  data: {
    success: boolean;
  };
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

  @Post('/hit')
  async updateHit(@Req() request: Request): Promise<updateHit> {
    const { index } = request.body;
    const result = await this.exerciseService.updateHit(index);
    if (!result) {
      return {
        message: '운동 히트수를 업데이트하지 못하였습니다.',
        data: {
          success: false,
        },
      };
    }
    return {
      message: '운동 히트수를 업데이트하였습니다.',
      data: {
        success: true,
      },
    };
  }
}
