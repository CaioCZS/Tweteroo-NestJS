import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateTweetDto } from './dtos/create-tweet.dto';
import { PageQuery, UsernameParam } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health(): string {
    return this.appService.health();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: CreateUserDto) {
    const { avatar, username } = body;
    this.appService.signUp(new User(username, avatar));
  }

  @Post('tweets')
  postTweet(@Body() body: CreateTweetDto) {
    const response = this.appService.postTweet(body);
    if (!response) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('tweets')
  getTweets(@Query() query: PageQuery) {
    const { page } = query;
    if (page) {
      if (Number(page) < 1 || isNaN(page)) {
        throw new HttpException(
          'Informe uma página válida!',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        return this.appService.getTweets(page);
      }
    }

    return this.appService.getTweets();
  }

  @Get('/tweets/:username')
  getTweetsUser(@Param() params: UsernameParam) {
    const { username } = params;
    return this.appService.getTweetsUser(username);
  }
}
