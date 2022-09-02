import { Module } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { SaludoController } from './saludo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saludo } from './entities/saludo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Saludo])],
  controllers: [SaludoController],
  providers: [SaludoService],
})
export class SaludoModule {}
