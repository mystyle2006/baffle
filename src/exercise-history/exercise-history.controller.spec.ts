import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseHistoryController } from './exercise-history.controller';
import { ExerciseHistoryService } from './exercise-history.service';

describe('ExerciseHistoryController', () => {
  let controller: ExerciseHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseHistoryController],
      providers: [ExerciseHistoryService],
    }).compile();

    controller = module.get<ExerciseHistoryController>(ExerciseHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
