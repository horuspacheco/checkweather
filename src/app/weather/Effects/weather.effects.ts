import { GeneralItem } from './../Models/item.model';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, exhaustMap } from 'rxjs/operators';

import { CityActionTypes,
        AddCity,
        AddCityError,
        AddedCity,
        CheckForecastCity,
        CheckedForecastCity,
        CheckForecastCityError,
        IsReady} from '../Actions/weather.actions';
import { WeatherService } from 'src/app/weather/Services/weather.service';



@Injectable({
    providedIn: 'root'
  })

export class WeatherEffects {

    data_response : GeneralItem = new GeneralItem();

    @Effect()
    AddCity$: Observable<Action> = this.action$.pipe(
        ofType<AddCity>(CityActionTypes.ADD_CITY),
        tap(v => console.log('ADD_CITY_EFFECT', v)),
        map(action => action.payload),
        exhaustMap(data => {
            return this.weatherService.getWeather(data.city)
            .pipe(
                map(response => ({ type: '[City] ADDED_CITY', payload : response })),
                catchError(error => of({ type : '[City] ADD_CITY_ERROR', payload : error }))
            )
        })
    )

    @Effect()
    AddedCity$: Observable<Action> = this.action$.pipe(
        ofType<AddedCity>(CityActionTypes.ADDED_CITY),
        tap(v => console.log('AddedCity Effect', v)),
        map(response => ({ type: '[City] IS_READY', payload : response })),
        catchError(error => of({ type : '[City] ADD_CITY_ERROR', payload : error })) 
    )


    @Effect()
    AddCityError$: Observable<Action> = this.action$.pipe(
        ofType<AddCityError>(CityActionTypes.ADD_CITY_ERROR),
        tap(v => console.log('AddedCity Effect', v)),
        map(response => ({ type: '[City] IS_READY', payload : response }))
    )


    @Effect()
    CheckForecastCity$: Observable<Action> = this.action$.pipe(
        ofType<CheckForecastCity>(CityActionTypes.CHECK_FORECAST_CITY),
        tap(v => console.log('Forecast Check Effect', v)),
        map(action => action.payload),
        exhaustMap(data => {
            return this.weatherService.getForecast(data.city)
            .pipe(
                map(response => ({ type: '[Forecast] CHECKED_FORECAST_CITY', payload : response })),
                catchError(error => of({ type : '[Forecast] CHECK_FORECAST_ERROR', payload : error }))
            )
        })
    )

    @Effect()
    CheckedForecastCity$: Observable<Action> = this.action$.pipe(
        ofType<CheckedForecastCity>(CityActionTypes.CHECKED_FORECAST_CITY),
        tap(v => console.log('Forecast Checked Effect', v)),
        map(response => ({ type: '[Forecast] IS_READY', payload : response })),
        catchError(error => of({ type : '[Forecast] CHECK_FORECAST_ERROR', payload : error })) 
    )


    @Effect()
    CheckForecastCityError$: Observable<Action> = this.action$.pipe(
        ofType<CheckForecastCityError>(CityActionTypes.CHEK_FORECAST_CITY_ERROR),
        tap(v => console.log('Forecast Check Error Effect', v)),
        map(response => ({ type: '[Forecast] IS_READY', payload : response }))
    )





 @Effect({ dispatch : false })
    IsReady$: Observable<Action> = this.action$.pipe(
        ofType<IsReady>(CityActionTypes.IS_READY),
        tap(v => console.log('IS_READY Effect', v)) 
    )
    constructor(
        private action$ : Actions,
        private weatherService : WeatherService
    ){}
    

}