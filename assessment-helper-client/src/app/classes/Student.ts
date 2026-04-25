export class Student {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string | undefined;
  email: string;
  constructor(_id: number, _firstName: string, _lastName: string, _patronymic: string | undefined, _email: string) {
    this.id = _id;
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.patronymic = _patronymic;
    this.email = _email;
  }
}
