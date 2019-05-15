/*import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, exhaustMap } from 'rxjs/operators';

import { ForecastActionTypes,
        CheckForecastCity,
        CheckedForecastCity,
        CheckForecastCityError,
        IsReady} from '../Actions/forecast.action';
import { WeatherService } from 'src/app/weather/Services/weather.service';



@Injectable({
    providedIn: 'root'
  })

export class ForecastEffects {

    

    @Effect()
    CheckForecastCity$: Observable<Action> = this.action$.pipe(
        ofType<CheckForecastCity>(ForecastActionTypes.CHECK_FORECAST_CITY),
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
        ofType<CheckedForecastCity>(ForecastActionTypes.CHECKED_FORECAST_CITY),
        tap(v => console.log('Forecast Checked Effect', v)),
        map(response => ({ type: '[Forecast] IS_READY', payload : response })),
        catchError(error => of({ type : '[Forecast] CHECK_FORECAST_ERROR', payload : error })) 
    )


    @Effect()
    CheckForecastCityError$: Observable<Action> = this.action$.pipe(
        ofType<CheckForecastCityError>(ForecastActionTypes.CHEK_FORECAST_CITY_ERROR),
        tap(v => console.log('Forecast Check Error Effect', v)),
        map(response => ({ type: '[Forecast] IS_READY', payload : response }))
    )

 @Effect({ dispatch : false })
    IsReady$: Observable<Action> = this.action$.pipe(
        ofType<IsReady>(ForecastActionTypes.IS_READY),
        tap(v => console.log('IS_READY Effect', v)) 
    )
    constructor(
        private action$ : Actions,
        private weatherService : WeatherService
    ){}
    

}*/