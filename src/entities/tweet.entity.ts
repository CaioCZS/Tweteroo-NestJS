import { User } from './user.entity';

export class Tweet {
  constructor(
    private user: User,
    private tweet: string,
  ) {}
}
