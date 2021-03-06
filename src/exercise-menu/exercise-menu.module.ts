import { Module } from '@nestjs/common';
import { ExerciseMenuService } from './exercise-menu.service';
import { ExerciseMenuController } from './exercise-menu.controller';

@Module({
  controllers: [ExerciseMenuController],
  providers: [ExerciseMenuService],
})
export class ExerciseMenuModule {}
