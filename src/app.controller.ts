import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Este decorador indica que esta clase es un controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(): string {
    return 'Creando hello';
  }

  @Delete()
  deleteHello(): string {
    return 'Eliminando hello';
  }
}
