import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as weatherAction from '../../../Actions/weather.actions';
import * as fromWeather from '../../../../reducers/reducers';
import ForecastApi from 'src/app/weather/Models/forecast.model';


@Component({
  selector: 'app-zip-temp',
  templateUrl: './zip-temp.component.html',
  styleUrls: ['./zip-temp.component.css']
})
export class ZipTempComponent implements OnInit {
	public city:boolean = false;
  public title_form:string = "Check forecast for city";
  public city_name : string = ''
  weather_type = false
  forecast_type = true
  forecast : any;

  constructor(private store : Store<any>) { }

  ngOnInit() {
  }

  getForecast(e){
    console.log(e);
    this.store.dispatch(new weatherAction.CheckForecastCity({city : e}));
    
    this.forecast = this.store.pipe(
      select(fromWeather.getForecast)
    )
  }

}
