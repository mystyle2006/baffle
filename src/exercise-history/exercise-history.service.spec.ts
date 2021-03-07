import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseHistoryService } from './exercise-history.service';

describe('ExerciseHistoryService', () => {
  let service: ExerciseHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseHistoryService],
    }).compile();

    service = module.get<ExerciseHistoryService>(ExerciseHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
