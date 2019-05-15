import { environment } from './../../environments/environment';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import { RouterStateUrl } from '../shared/utils';

import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


import * as fromWeather from 'src/app/weather/Reducers/weather.reducers';
import * as fromForecast from 'src/app/weather/Reducers/forecast.reducer';
import { routerReducer } from '@ngrx/router-store';



export interface State {
    item : fromWeather.State,
    router : fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers : ActionReducerMap<State | any> = {
    weather : fromWeather.WeatherReducer,
    router : fromRouter.routerReducer
}

export function logger(reducer : ActionReducer<any>) :  ActionReducer<State> {
    return function(state : State, action: any) : State {
        return reducer(state, action);
    }
}

export const metaReducers:  MetaReducer<any>[] = !environment.production
?[logger, storeFreeze]
:[]



export const getWeatherState = createFeatureSelector<fromWeather.State>('weather');

export const getWeather = createSelector(
    getWeatherState,
    fromWeather.getWeatherState
)

export const getForecast = createSelector(
    getWeatherState,
    fromWeather.getWeatherState
)


