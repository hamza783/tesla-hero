import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  responseDataCache = new Map();
  chartData:any= [];
  yMin;
  yMax;
  chartStyle='T';
  loadingGraph=true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Response");
  //  this.mockDate()
    this.getData(10);
  }

  getData(interval){
    if(this.responseDataCache.get(interval)) {
      // get the value from the cache
      //this.responseData=this.responseDataCache.get(interval);
      this.populateDataObject(this.responseDataCache.get(interval));
      console.log("this is from cache");
      console.log(this.chartData);
    } else {
      // if the value is not in cache, get the value by makking an API call and populate the cache with the value
      this.loadingGraph=true;
      const url =this.createFinnhubUrl(interval);
      this.http.get(url).subscribe((res)=>{
       // this.responseData = res
        this.responseDataCache.set(interval,res);
        this.populateDataObject(res);
        console.log("this is from new call");
        console.log(this.chartData);
        this.loadingGraph=false;
      });
    }
  }

  mockDate() {
    // use mock data instead of actual to avoid making calls to API, limited number of calls to free version of API
    this.loadingGraph=true;
    let responseData:any = []
    responseData.c=[420.2799987793, 424.67999267578, 406.01998901367, 410.82998657227, 388.04000854492, 400.51000976562];
    responseData.t=[1603670400, 1603756800, 1603843200, 1603929600, 1604016000, 1604275200];
    console.log(responseData);
    this.populateDataObject(responseData);
    this.loadingGraph=false;
  }

  populateDataObject(responseData) {
    this.chartData=[]; // clear out the list
    let obj:any = {};
    this.yMax=null;
    this.yMin=null;
    obj.name="Tesla";
    let points:any=[];
    // response.c and response.t has the same length
    for(let i=0;i<responseData.c.length;i++) {
      let point:any={};
      point.name=new Date(responseData.t[i]*1000);
      let price=responseData.c[i]
      point.value=price;
      if(!this.yMin)
        this.yMin=price;
      else if(price<this.yMin) {
        this.yMin=price;
      }
      if(!this.yMax)
        this.yMax=price;
      else if(price>this.yMax) {
        this.yMax=price;
      }
      points.push(point);
    }
    obj.series=points;
    this.chartData.push(obj);
  }
  createFinnhubUrl(interval) {
    let url ='https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=D&from=START_DATE&to=END_DATE&token=bufkhpv48v6o04cvaahg';
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(startDate.getDate()-interval);
    console.log("startDate");
    console.log(startDate);
    url=url.replace("START_DATE",Math.round(startDate.getTime()/1000).toString());
    url=url.replace("END_DATE",Math.round(endDate.getTime()/1000).toString());
    console.log("url");
    console.log(url);
    return url;
  }

  setChartType(type) {
    console.log(type);
    console.log(type+' is pressed');
    switch(type) {
      case 'T':
        this.getData(10);
        this.chartStyle='T';
        break;
      case 'M':
        this.getData(30);
        this.chartStyle='M';
        break;
      case 'Y':
        this.getData(365);
        this.chartStyle='Y';
        break;
      case 'F':
        this.getData(1825);
        this.chartStyle='F';
        break;
      default:
        this.chartStyle='T';
    }
  }
}
