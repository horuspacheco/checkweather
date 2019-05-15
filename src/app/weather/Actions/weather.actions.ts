import { Action } from '@ngrx/store';
import ItemApi from '../Models/weather.model';
import { GeneralItem } from '../Models/item.model';
import ForecastApi from '../Models/forecast.model';

export enum CityActionTypes {

    ADD_CITY = '[City] ADD_CITY',
    ADD_CITY_ERROR = '[City] ADDED_CITY_ERROR',
    ADDED_CITY = '[City] ADDED_CITY',

    CHECK_FORECAST_CITY = '[Forecast] CHECK_FORECAST_CITY',
    CHECKED_FORECAST_CITY = '[Forecast] CHECKED_FORECAST_CITY',
    CHEK_FORECAST_CITY_ERROR = '[Forecast] CHECK_FORECAST_CITY_ERROR',
    
    IS_READY = '[City] IS_READY'
    
}


/*ACTIONS ADD CITY*/ 
export class AddCity implements Action {
    readonly type = CityActionTypes.ADD_CITY;
    constructor(public payload :{ city : string }){}
}
export class AddCityError implements Action {
    readonly type = CityActionTypes.ADD_CITY_ERROR
    constructor(public payload : {error : string}){}
}
export class AddedCity implements Action {
    readonly type = CityActionTypes.ADDED_CITY;
    constructor(public payload : {item: ItemApi}){}
}

export class CheckForecastCity implements Action {
    readonly type = CityActionTypes.CHECK_FORECAST_CITY;
    constructor(public payload :{ city : string }){}
}

export class CheckedForecastCity implements Action {
    readonly type = CityActionTypes.CHECKED_FORECAST_CITY;
    constructor(public payload :{  item : ForecastApi }){}
}

export class CheckForecastCityError implements Action {
    readonly type = CityActionTypes.CHEK_FORECAST_CITY_ERROR;
    constructor(public payload :{  error: string }){}
}



export class IsReady implements Action {
    readonly type = CityActionTypes.IS_READY;
    constructor(public payload : {ready : boolean}){}
}

export type actions = 
AddCity
| AddCityError
| AddedCity
| CheckForecastCity
| CheckedForecastCity
| CheckForecastCityError
| IsReady ; 
