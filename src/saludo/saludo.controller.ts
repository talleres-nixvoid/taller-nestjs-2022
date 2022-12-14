import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { CreateSaludoDto } from './dto/create-saludo.dto';
import { UpdateSaludoDto } from './dto/update-saludo.dto';
import { Saludo } from './entities/saludo.entity';

@Controller('saludos')
export class SaludoController {
  constructor(private readonly saludoService: SaludoService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createSaludoDto: CreateSaludoDto): Promise<Saludo> {
    return this.saludoService.create(createSaludoDto);
  }

  @Get()
  findAll(): Promise<Saludo[]> {
    return this.saludoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saludoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaludoDto: UpdateSaludoDto,
  ): Promise<Saludo> {
    return this.saludoService.update(+id, updateSaludoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.saludoService.remove(+id);
  }
}
