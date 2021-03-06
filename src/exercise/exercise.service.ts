import { Injectable } from '@nestjs/common';

export interface defaultResponse {
  message: string;
  data: Array<{
    krName: string;
    enName: string;
    index: number;
  }>;
}

@Injectable()
export class ExerciseService {
  getMenuList(): defaultResponse {
    return {
      message: '운동 목록을 가져왔습니다.',
      data: [
        {
          krName: '운동1',
          enName: '운동2',
          index: 1,
        },
      ],
    };
  }
}
