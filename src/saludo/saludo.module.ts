import { Module } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { SaludoController } from './saludo.controller';

@Module({
  controllers: [SaludoController],
  providers: [SaludoService],
})
export class SaludoModule {}
