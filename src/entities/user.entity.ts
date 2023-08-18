export class User {
  constructor(
    private _username: string,
    private avatar: string,
  ) {}
  get username(): string {
    return this._username;
  }
}
