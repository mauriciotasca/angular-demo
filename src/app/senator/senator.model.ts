import Politician from "../politician/politician.model";
export default class Senator extends Politician{

  party: string;

  constructor(party : string, name?:string ,age?: number,hobbies?: Array<string>) {
    super(name,age,hobbies);

    this.party = party;

  }

}
