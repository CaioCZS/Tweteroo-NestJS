import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: CreateUserDto) {
    const { avatar, username } = body;
    try {
      this.appService.signUp(new User(username, avatar));
    } catch (error) {
      throw new HttpException('asds', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('tweets')
  getTweets() {
    return this.appService.getTweets();
  }
}
