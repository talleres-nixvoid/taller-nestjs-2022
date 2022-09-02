import { NotFoundException } from '@nestjs/common';

export class SaludoNoEncontrado extends NotFoundException {
  code = 'SALUDO_NO_ENCONTRADO';
  constructor(id: number) {
    super(`El saludo ${id} no ha sido encontrado`);
  }
}
