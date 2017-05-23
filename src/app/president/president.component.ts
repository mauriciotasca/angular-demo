import {Component, OnInit} from "@angular/core";
import {PresidentService} from "./president.service";
import President from "./president.model";

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.css'],
  providers: [PresidentService]
})
export class PresidentComponent implements OnInit {
  private presidents: Array<President>;
  private president : President ;
  private name;
  shouldBeBlue = true;
  private shouldBeRed = true;

  niceClass = {'red-color': this.shouldBeRed,
    'blue-color': this.shouldBeBlue};
  private agePluralMapping: {[k: string]: string} = {'=0': 'No age found.', '=1': 'one year old', 'other': `# years old`};

  constructor(private presidentService: PresidentService) {
    this.presidents = new Array<President>();
    this.president = new President();
  }

  updatePresident(name: string, age: number, hobbies: Array<string>) {
    this.president.name = name;
    this.president.age = age;
    this.president.hobbies = hobbies;
  }

  ngOnInit() {
    this.presidentService.getPresidents()
      .subscribe((response) => {
        console.log(response);
        this.presidents = response.json().presidents;
      });
  }

}
