import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  car="";
  features=[];
  cars= new Map ([
    ["model3",{"0-60":"3.1 s","Range":"355 mi", "Type":"AWD"}],
    ["modelY",{"0-60":"3.5 s","Range":"326 mi", "Cargo":"68 cu ft"}],
    ["modelS", {"0-60":"1.99 s","Range":"390", "Top Speed":"200"}],
    ["modelX",{"0-60":"2.5 s","Range":"340", "Type":"AWD","Quater Mile":"9.9s"}]
  ]);

  backGroundClass="background-model-3";
  constructor() { }

  ngOnInit(): void {
    this.setCar('3');
    console.log("init cars");
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
    this.features=[];
    let feats = this.cars.get(this.car);
    for (var key in feats){
      var feature = {featureName:"",featureValue:""};
      feature.featureName=key;
      feature.featureValue=feats[key];
      this.features.push(feature);
    }
  }

}
