import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ItemApi from 'src/app/weather/Models/weather.model';
import  ForecastApi from 'src/app/weather/Models/forecast.model';
@Component({
  selector: 'app-form-city',
  templateUrl: './form-city.component.html',
  styleUrls: ['./form-city.component.css']
})
export class FormCityComponent implements OnInit {

  public city_input : string;

  @Input() city: boolean;
  @Input() title_form: string;
  @Input() city_name : string
  @Output() weatherCity = new EventEmitter<string>();
  @Output() getForecast = new EventEmitter<string>();
  




  constructor() { }

  ngOnInit() {
    
  }

  sendFormCity(){
    this.weatherCity.emit(this.city_input);
  }

  sendFormForecast(){
    console.log("LLAMADO")
    this.getForecast.emit(this.city_input);
  }

}
