export class Group {
  id!: number;
  userId: number;
  name: string;
  constructor(_userId: number, _name: string) {
      this.userId = _userId;
      this.name = _name;
  }
}
