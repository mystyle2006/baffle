import { Injectable } from '@nestjs/common';

export interface response {
  message: string;
  data: Array<{
    krName: string;
    enName: string;
    hit: number;
    imageUrl: string;
    index: number;
  }>;
}

@Injectable()
export class ExerciseService {
  findAll(): response {
    return {
      message: '운동 목록을 가져왔습니다.',
      data: [
        {
          krName: '운동1',
          enName: '운동2',
          hit: 255,
          imageUrl: 'http://test-image.png',
          index: 1,
        },
      ],
    };
  }
}
