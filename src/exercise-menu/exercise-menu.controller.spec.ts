import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseMenuController } from './exercise-menu.controller';
import { ExerciseMenuService } from './exercise-menu.service';

describe('ExerciseMenuController', () => {
  let controller: ExerciseMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseMenuController],
      providers: [ExerciseMenuService],
    }).compile();

    controller = module.get<ExerciseMenuController>(ExerciseMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
