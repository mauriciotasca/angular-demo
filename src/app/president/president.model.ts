import Politician from "../politician/politician.model";
/**
 * Created by mauriciocorrea on 5/8/17.
 */
export default class President  {
  name: string;
  age: number;
  hobbies: Array<string>;

  constructor(){
    this.name = '';
    this.age = 0;
    this.hobbies = new Array<string>();
  }

}
