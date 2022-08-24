import { PartialType } from '@nestjs/mapped-types';
import { CreateSaludoDto } from './create-saludo.dto';

export class UpdateSaludoDto extends PartialType(CreateSaludoDto) {}
