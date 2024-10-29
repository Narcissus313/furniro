import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('home')
  @Render('index')
  showHome() {
    return {};
  }
}
