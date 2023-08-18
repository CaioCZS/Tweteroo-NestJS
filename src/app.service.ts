import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private tweets: Tweet[];
  private users: User[];

  constructor() {
    this.users = [];
    this.users.push(
      new User(
        'Usuario 1',
        'https://www.youtube.com/watch?v=lNs4__kTXUc&ab_channel=SpongeBoyLofi',
      ),
    );
    this.tweets = [];
    this.tweets.push(
      new Tweet(
        new User(
          'Usuario 1',
          'https://www.youtube.com/watch?v=lNs4__kTXUc&ab_channel=SpongeBoyLofi',
        ),
        'Primeiro Tweet',
      ),
    );
  }

  getHello(): string {
    return 'Hello World!';
  }

  signUp(user: User) {
    this.users.push(user);
    return this.users;
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
