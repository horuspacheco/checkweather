import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*NGRX IMPORTS*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  routerReducer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  StoreRouterConnectingModule.forRoot({stateKey : 'router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name : 'AngularWeatherNGRX',
    logOnly : environment.production
  })
]


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';



import { WeatherService } from './weather/Services/weather.service';


import {reducers, metaReducers} from './reducers/reducers';


import { WeatherModule } from './weather/weather.module';
import { CityTempComponent } from './weather/components/weather/city-temp/city-temp.component';
import { ZipTempComponent } from './weather/components/weather/zip-temp/zip-temp.component';
import { FormCityComponent } from './weather/components/forms/form-city/form-city.component';
import { MainComponent } from './weather/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    WeatherModule,
    ...NGRX_IMPORTS
  ],
  entryComponents: [
    CityTempComponent,
    ZipTempComponent,
    FormCityComponent,
    MainComponent
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
