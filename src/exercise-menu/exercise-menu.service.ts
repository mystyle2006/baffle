import { Injectable } from '@nestjs/common';

export interface response {
  message: string;
  data: Array<{
    krName: string;
    enName: string;
    index: number;
  }>;
}

@Injectable()
export class ExerciseMenuService {
  findAll(): response {
    return {
      message: '메뉴를 가져왔습니다.',
      data: [
        {
          krName: '메뉴1',
          enName: '메뉴2',
          index: 1,
        },
      ],
    };
  }
}
