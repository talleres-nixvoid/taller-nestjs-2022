import { BadRequestException } from '@nestjs/common';

export class SaludoSinTextoException extends BadRequestException {
  code = 'SALUDO_SIN_TEXTO';

  constructor() {
    super('El saludo no tiene texto');
  }
}
