import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CityTempComponent } from './components/weather/city-temp/city-temp.component';
import { ZipTempComponent } from './components/weather/zip-temp/zip-temp.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  
  {
    path : '',
    component : MainComponent
  },
  {
    path : 'check-weather',
    component : CityTempComponent
  },
  {
    path : 'check-forecast',
    component : ZipTempComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations : [
    
  ],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
