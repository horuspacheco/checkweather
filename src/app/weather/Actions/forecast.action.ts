import { Action } from '@ngrx/store';
import ForecastApi from '../Models/forecast.model';
export enum ForecastActionTypes {

    CHECK_FORECAST_CITY = '[Forecast] CHECK_FORECAST_CITY',
    CHECKED_FORECAST_CITY = '[Forecast] CHECKED_FORECAST_CITY',
    CHEK_FORECAST_CITY_ERROR = '[Forecast] CHECK_FORECAST_CITY_ERROR',

    IS_READY = '[Forecast] IS_READY'
    
}

export class CheckForecastCity implements Action {
    readonly type = ForecastActionTypes.CHECK_FORECAST_CITY;
    constructor(public payload :{  item : ForecastApi }){}
}

export class CheckedForecastCity implements Action {
    readonly type = ForecastActionTypes.CHECKED_FORECAST_CITY;
    constructor(public payload :{  item : ForecastApi }){}
}

export class CheckForecastCityError implements Action {
    readonly type = ForecastActionTypes.CHEK_FORECAST_CITY_ERROR;
    constructor(public payload :{  error: string }){}
}

export class IsReady implements Action {
    readonly type = ForecastActionTypes.IS_READY;
    constructor(public payload : {ready : boolean}){}
}

export type actions = 
CheckForecastCity
| CheckedForecastCity
| CheckForecastCityError
| IsReady ; 
