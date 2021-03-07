import { Injectable } from '@nestjs/common';

export interface response {
  message: string;
  data: Array<{
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    name: string;
    set: number;
    index: number;
  }>;
}

@Injectable()
export class ExerciseHistoryService {
  findAll(): response {
    return {
      message: '운동 기록을 가져왔습니다.',
      data: [
        {
          set: 5,
          imageUrl: 'http://test.png',
          createdAt: '2021-01-01',
          updatedAt: '2021-01-01',
          name: '운동1',
          index: 1,
        },
      ],
    };
  }
}
