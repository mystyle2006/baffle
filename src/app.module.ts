import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseMenuModule } from './exercise-menu/exercise-menu.module';
import { ExerciseHistoryModule } from './exercise-history/exercise-history.module';
import { ExerciseSetModule } from './exercise-set/exercise-set.module';

@Module({
  imports: [ExerciseModule, ExerciseMenuModule, ExerciseHistoryModule, ExerciseSetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
