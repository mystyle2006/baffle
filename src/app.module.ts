import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseMenuModule } from './exercise-menu/exercise-menu.module';

@Module({
  imports: [ExerciseModule, ExerciseMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
