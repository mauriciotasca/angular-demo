import {Component, OnInit} from "@angular/core";
import {PoliticianComponent} from "../politician/politician.component";
import Senator from "./senator.model";

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css']
})
export class SenatorComponent extends PoliticianComponent implements OnInit {

  private bernie: Senator;
  private bernieOffice: string;
  private showTypingHobby: boolean;
  private timeout;

  constructor() {
    super();
    this.showTypingHobby = false;
  }

  newHobbyAddedHandler(newHobby) {
    this.bernie.hobbies.push(newHobby);
  }

  triggerSetTimeout() {
    this.timeout = setTimeout(() => {
      this.showTypingHobby = false;
    }, 650);
  }

  newHobbyTypedHandler() {
    if (!this.showTypingHobby) {
      this.showTypingHobby = true;
      this.triggerSetTimeout();
    } else {
      clearTimeout(this.timeout);
      this.triggerSetTimeout();
    }
  }

  ngOnInit() {
    this.bernie = new Senator('Bernie Sanders', 75, ['Athletics', 'Basketball', 'Music']);
    this.bernieOffice = super.getOffice(this.bernie);
  }


}
