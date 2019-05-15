import * as Model from "../Models/weather.model";
import * as WeatherActions from '../Actions/weather.actions';
import { CityActionTypes } from '../Actions/weather.actions';
import ForecastApi from '../Models/forecast.model';

export interface State {
    isLoading : boolean,
    error : boolean,
    weather : Model.WeatherMap;
    forecast : ForecastApi
}

export const initializeState : State = {
    isLoading : false,
    error : false,
    weather : new Model.WeatherMap(),
    forecast : new ForecastApi()
}



export function WeatherReducer(state : State, action : WeatherActions.actions){
    switch(action.type){

        case CityActionTypes.IS_READY : {
            return {
                ...state,
                isLoading : false
            }
        }
        case CityActionTypes.ADD_CITY : 
            return {
                ...state,
                isLoading : true,
                error: false
            }
       
        case CityActionTypes.ADDED_CITY : 
            return {
                ...state,
                isLoading : false,
                weather : action.payload,
                error: false
            } 
        case CityActionTypes.ADD_CITY_ERROR : 
             return {
                ...state,
                isLoading : false,
                error: true
            }


        case CityActionTypes.CHECK_FORECAST_CITY : 
            return {
               ...state,
               isLoading : true,
               error: false
           }
        
        case CityActionTypes.CHECKED_FORECAST_CITY : 
           return {
              ...state,
              isLoading : false,
              error: false,
              forecast : action.payload
        }


        default : 
            return {
                ...state,
                isLoading: false,
                error : false
               
            }

    }
}

export const getWeatherState = (state:State) =>state;
