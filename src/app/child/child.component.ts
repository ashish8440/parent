import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  name:string;
  year:string;
  constructor() { }

  ngOnInit(): void {
    this.name = this.car[0].name;
    this.year = this.car[0].year;
  }

  add() {
    console.log("hello", this.childMessage);
  }

}
