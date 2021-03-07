import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseMenuModule } from './exercise-menu/exercise-menu.module';
import { ExerciseHistoryModule } from './exercise-history/exercise-history.module';
import { ExerciseSetModule } from './exercise-set/exercise-set.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bapeul',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ExerciseModule,
    ExerciseMenuModule,
    ExerciseHistoryModule,
    ExerciseSetModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
