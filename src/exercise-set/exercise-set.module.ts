import { Module } from '@nestjs/common';
import { ExerciseSetService } from './exercise-set.service';
import { ExerciseSetController } from './exercise-set.controller';
import { ExerciseSet } from './exercise-set.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseSet])],
  controllers: [ExerciseSetController],
  providers: [ExerciseSetService],
})
export class ExerciseSetModule {}
