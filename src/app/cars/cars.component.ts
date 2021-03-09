import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  car="model3";
  backGroundClass="background-model-3";
  constructor() { }

  ngOnInit(): void {
  }

  setCar(carName) {
    switch(carName){
      case '3':
        this.car='model3';
        this.backGroundClass="background-model-3";
        break;
      case 'Y':
        this.car='modelY';
        this.backGroundClass="background-model-y";
        break;
      case 'S':
        this.car='modelS';
        this.backGroundClass="background-model-s";
        break;
      case 'X':
        this.car='modelX';
        this.backGroundClass="background-model-x"
        break;
    }
  }
}
