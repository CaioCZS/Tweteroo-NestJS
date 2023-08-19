export class User {
  constructor(
    private username: string,
    private avatar: string,
  ) {}

  get _username() {
    return this.username;
  }
}
