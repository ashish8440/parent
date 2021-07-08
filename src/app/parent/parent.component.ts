import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  car = [];
  name:string;
  year:string;
  constructor(
    private carValue: ServiceService
  ) { }

  ngOnInit(): void {
    this.carValue.getCar()
      .subscribe(res=> this.car = res);
  }

  getBandValues():void{
    this.name = this.car[0].name;
    this.year = this.car[0].year;
  }
}
