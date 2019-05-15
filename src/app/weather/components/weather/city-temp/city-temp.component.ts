import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as weatherAction from '../../../Actions/weather.actions';
import * as fromWeather from '../../../../reducers/reducers';
import ItemApi from 'src/app/weather/Models/weather.model';
import { GeneralItem } from 'src/app/weather/Models/item.model';





@Component({
  selector: 'app-city-temp',
  templateUrl: './city-temp.component.html',
  styleUrls: ['./city-temp.component.css']
})
export class CityTempComponent implements OnInit {
  public city = true;
  public title_form = 'Check Weather for City';
  public city_name = ''

  weather_type = true
  forecast_type = false
  
  weather : any;
  constructor(private store : Store<any>) { }

  ngOnInit() {
   
  }

  getWeatherCity(e){
    console.log('FORMULARIO MANDADO',e);
    this.store.dispatch(new weatherAction.AddCity({city : e}));
    this.weather = this.store.pipe(
      select(fromWeather.getWeather)
    )
    
  }

}
