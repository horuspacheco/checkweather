import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path : 'weather',
      loadChildren : './weather/weather.module#WeatherModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
