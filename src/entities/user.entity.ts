export class User {
  constructor(
    private username: string,
    private avatar: string,
  ) {}

  get _username() {
    return this.username;
  }
  get _avatar() {
    return this.avatar;
  }
}
