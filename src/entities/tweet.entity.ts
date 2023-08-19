export class Tweet {
  constructor(
    private username: string,
    private avatar: string,
    private tweet: string,
  ) {}

  get _username() {
    return this.username;
  }
}
