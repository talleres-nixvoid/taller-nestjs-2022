import { Test, TestingModule } from '@nestjs/testing';
import { SaludoService } from './saludo.service';

describe('SaludoService', () => {
  let service: SaludoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaludoService],
    }).compile();

    service = module.get<SaludoService>(SaludoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
