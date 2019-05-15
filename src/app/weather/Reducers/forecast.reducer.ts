import * as ForecastrActions from '../Actions/forecast.action';
import { ForecastActionTypes } from '../Actions/forecast.action';
import * as ModelForecast from '../Models/forecast.model';

export interface StateForecast {
    isLoading : boolean,
    error : boolean,
    forecast : ModelForecast.ForecastMap;
}

export const initializeStateForecast : StateForecast = {
    isLoading : false,
    error : false,
    forecast : new ModelForecast.ForecastMap()
}


export function ForecastReducer(state : StateForecast, action : ForecastrActions.actions){
    console.log(action.type)
    switch(action.type){

        case ForecastActionTypes.CHECK_FORECAST_CITY : 
            return {
               ...state,
               isLoading : true,
               error: false
           }
        
        case ForecastActionTypes.CHECKED_FORECAST_CITY : 
           return {
              ...state,
              isLoading : true,
              error: false,
              forecast : action.payload
        }

        case ForecastActionTypes.CHEK_FORECAST_CITY_ERROR : 
           return {
              ...state,
              isLoading : true,
              error: true
        }

        default : 
            return {
                ...state,
                isLoading: false,
                error : true
               
            }

    }
}

export const getWeatherState = (state:StateForecast) =>state;
