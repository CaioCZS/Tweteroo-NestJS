import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private tweets: Tweet[];
  private users: User[];

  constructor() {
    this.users = [];
    this.users.push(new User('Usuario 1', 'foto de perfil1'));
    this.tweets = [];
    this.tweets.push(
      new Tweet(new User('Usuario 1', 'foto de perfil1'), 'Primeiro Tweet'),
    );
  }

  getHello(): string {
    return 'Hello World!';
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
