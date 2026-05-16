export class Student {
  id!: number;
  groupId: number;
  firstName: string;
  lastName: string;
  patronymic: string | undefined;
  email: string;
  constructor(_groupId: number, _firstName: string, _lastName: string, _patronymic: string | undefined, _email: string) {
    this.groupId = _groupId;
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.patronymic = _patronymic;
    this.email = _email;
  }
}
