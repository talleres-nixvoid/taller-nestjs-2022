import { Test, TestingModule } from '@nestjs/testing';
import { SaludoController } from './saludo.controller';
import { SaludoService } from './saludo.service';

describe('SaludoController', () => {
  let controller: SaludoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaludoController],
      providers: [SaludoService],
    }).compile();

    controller = module.get<SaludoController>(SaludoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
