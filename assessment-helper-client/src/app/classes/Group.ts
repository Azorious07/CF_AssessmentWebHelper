export class Group {
  id: number;
  userId: number;
  name: string;
  constructor(_id: number, _userId: number, _name: string) {
      this.id = _id;
      this.userId = _userId;
      this.name = _name;
  }
}
