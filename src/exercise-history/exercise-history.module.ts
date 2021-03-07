import { Module } from '@nestjs/common';
import { ExerciseHistoryService } from './exercise-history.service';
import { ExerciseHistoryController } from './exercise-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseHistory } from './exercise-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseHistory])],
  controllers: [ExerciseHistoryController],
  providers: [ExerciseHistoryService],
})
export class ExerciseHistoryModule {}
