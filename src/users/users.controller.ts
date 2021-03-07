import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

interface findAll {
  message: string;
  data: Array<User>;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<findAll> {
    const result = await this.usersService.findAll();
    return {
      message: '유저 목록을 가져왔습니다.',
      data: result,
    };
  }
}
