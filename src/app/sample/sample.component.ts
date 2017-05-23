import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
<div>{{name}}</div>
`,
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  private name: string;
  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }

}
