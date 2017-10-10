import {Component, OnInit} from "@angular/core";
import Politician from "./politician.model";

export enum Office {
  whitehouse = 0,
  congress = 1,
}

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.css']
})
export class PoliticianComponent implements OnInit {

  private offices: Array<any>;
  private officeName: Array<any>;

  constructor() {
    this.offices = [];
    this.officeName = [];

    this.officeName[Office.whitehouse] = 'White House';
    this.officeName[Office.congress] = 'United States Congress';

    this.createOffices();
  }

  protected getOffice(politician: Politician): string {
    return politician ? this.offices[politician.name] : '';
  }

  private createOffices(): void {
    this.offices["George Washington"] = this.officeName[Office.whitehouse];
    this.offices["Thomas Jefferson"] = this.officeName[Office.whitehouse];
    this.offices["Theodore Roosevelt"] = this.officeName[Office.whitehouse];
    this.offices["John F. Kennedy"] = this.officeName[Office.whitehouse];

    this.offices["Bernie Sanders"] = this.officeName[Office.congress];
    this.offices["Susan Collins"] = this.officeName[Office.congress];
    this.offices["John Hoeven"] = this.officeName[Office.congress];
    this.offices["Angus King"] = this.officeName[Office.congress];
  }

  ngOnInit() {

  }

}
