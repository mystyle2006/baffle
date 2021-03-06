import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseMenuService } from './exercise-menu.service';

describe('ExerciseMenuService', () => {
  let service: ExerciseMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseMenuService],
    }).compile();

    service = module.get<ExerciseMenuService>(ExerciseMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
