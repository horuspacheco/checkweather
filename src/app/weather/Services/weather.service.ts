import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ItemApi from '../Models/weather.model';
import ForecastApi from '../Models/forecast.model';
import { GeneralItem } from './../Models/item.model';
import { catchError, map, tap, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
   
})
export class WeatherService {
  URI_weather : string = '';
  URI_forecast : string = '';
  apiKey : string = '81c05bd658d5b52c0eb1115cf580acd8';
  data_response : GeneralItem = new GeneralItem();
  constructor(private http : HttpClient) { 
    this.URI_weather = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    this.URI_forecast = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(city : string){
    console.log(`${this.URI_weather}${city}`);
      return this.http.get<ItemApi>(`${this.URI_weather}${city}`)
  }
  
  getForecast(city : string){
    console.log("GET FORECAST",`${this.URI_forecast}${city}`);
      return this.http.get<ForecastApi>(`${this.URI_forecast}${city}`)
  }

}
