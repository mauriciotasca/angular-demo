import Politician from "../politician/politician.model";
export default class Senator extends Politician{

  constructor(name?:string ,age?: number,hobbies?: Array<string>) {
    super(name,age,hobbies);
  }

}
