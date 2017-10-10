import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-senator-hobbies',
  templateUrl: './senator-hobbies.component.html',
  styleUrls: ['./senator-hobbies.component.css']
})
export class SenatorHobbiesComponent implements OnInit {

  private newHobbie: string;

  @Input('hobbies') hobbies: Array<string>;
  @Output() newHobbyTyped?: EventEmitter<any> = new EventEmitter<any>();
  @Output() newHobbyAdded?: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  emitNewHobbyAdded(): void{
    this.hobbies.push(this.newHobbie);
    this.newHobbie = '';

    this.newHobbyAdded.emit();
  }

  emitNewHobbyTyped() :void{
    this.newHobbyTyped.emit();
  }

  ngOnInit() {
  }

}
