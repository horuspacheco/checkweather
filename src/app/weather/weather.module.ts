

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';

import { CityTempComponent } from './components/weather/city-temp/city-temp.component';
import { ZipTempComponent } from './components/weather/zip-temp/zip-temp.component';
import { FormCityComponent } from './components/forms/form-city/form-city.component';
import { MainComponent } from './components/main/main.component';
import { StoreModule } from '@ngrx/store';
import * as fromWeather from './Reducers/weather.reducers'
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './Effects/weather.effects';
import { ContentResponseComponent } from './components/content-response/content-response.component';



@NgModule({
  declarations: [
    CityTempComponent,
    FormCityComponent,
    ZipTempComponent,
    MainComponent,
    ContentResponseComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    StoreModule.forFeature('weather', fromWeather.WeatherReducer),
    EffectsModule.forFeature([WeatherEffects])
  ]
})
export class WeatherModule { }
