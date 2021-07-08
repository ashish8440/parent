import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  car = [];

  constructor(
    private carValue: ServiceService
  ) { }

  ngOnInit(): void {
    this.carValue.getCar()
      .subscribe(res=> this.car = res);
  }

}
