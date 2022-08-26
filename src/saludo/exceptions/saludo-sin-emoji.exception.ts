import { BadRequestException } from '@nestjs/common';

export class SaludoSinEmojiException extends BadRequestException {
  code = 'SALUDO_SIN_EMOJI';
  constructor() {
    super('El saludo no tiene emoji');
  }
}
