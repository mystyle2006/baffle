import { Module } from '@nestjs/common';
import { ExerciseMenuService } from './exercise-menu.service';
import { ExerciseMenuController } from './exercise-menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseMenu } from './exercise-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseMenu])],
  controllers: [ExerciseMenuController],
  providers: [ExerciseMenuService],
})
export class ExerciseMenuModule {}
