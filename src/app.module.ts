import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseMenuModule } from './exercise-menu/exercise-menu.module';
import { ExerciseHistoryModule } from './exercise-history/exercise-history.module';

@Module({
  imports: [ExerciseModule, ExerciseMenuModule, ExerciseHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
