import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { CreateTweetDto } from './dtos/create-tweet.dto';
import { MAX_TWEETS_PER_PAGE } from './constants';

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
      this.tweets.push(
        new Tweet(userIsLogged._username, userIsLogged._avatar, body.tweet),
      );
    }

    return userIsLogged;
  }

  getTweets(page?: number): Tweet[] {
    if (page > 1) {
      const max = MAX_TWEETS_PER_PAGE + (page - 1) * MAX_TWEETS_PER_PAGE;
      const min = max - MAX_TWEETS_PER_PAGE;
      return this.tweets.reverse().slice(min, max);
    }

    if (this.tweets.length > 15) {
      return this.tweets.reverse().slice(0, MAX_TWEETS_PER_PAGE);
    }

    return this.tweets;
  }

  getTweetsUser(username: string) {
    return this.tweets.filter((tweet) => username === tweet._username);
  }
}
