import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { CreateTweetDto } from './dtos/create-tweet.dto';

@Injectable()
export class AppService {
  private tweets: Tweet[];
  private users: User[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  health(): string {
    return "I'm okay!";
  }

  signUp(user: User) {
    return this.users.push(user);
  }

  postTweet(body: CreateTweetDto) {
    const userIsLogged = this.users.find(
      (user) => user._username === body.username,
    );

    if (userIsLogged) {
      this.tweets.push(new Tweet(userIsLogged, body.tweet));
    }

    return userIsLogged;
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
