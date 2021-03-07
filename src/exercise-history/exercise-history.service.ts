import { Injectable } from '@nestjs/common';

export interface response {
  message: string;
  data: Array<{
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    name: string;
    index: number;
    set: Array<{
      weight: number;
      unit: string;
      count: number;
      index: number;
      status: string;
    }>;
  }>;
}

@Injectable()
export class ExerciseHistoryService {
  findAll(): response {
    return {
      message: '운동 기록을 가져왔습니다.',
      data: [
        {
          set: [
            {
              index: 1,
              count: 2,
              weight: 50,
              unit: 'kg',
              status: 'done',
            },
            {
              index: 2,
              count: 2,
              weight: 50,
              unit: 'kg',
              status: 'pending',
            },
          ],
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
