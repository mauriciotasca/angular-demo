export default class Politician {
  name: string;
  age: number;
  hobbies: Array<string>;

  constructor(name?: string, age?: number, hobbies?: Array<string>) {
    this.name = name || '';
    this.age = age || 0;
    this.hobbies = hobbies || new Array<string>();
  }

}
