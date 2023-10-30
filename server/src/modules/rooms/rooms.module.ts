import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';

@Module({
  providers: [RoomsService],
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomsController]
})
export class RoomsModule {}
