import ItemApi from "./weather.model";


export interface WeatherState extends ItemApi {
    loading : boolean;

    editable : boolean;
    edited : boolean;
    editing : boolean;
    
    selected : boolean;
    refreshing : boolean;

    create : boolean;

    error : boolean;

}

export const initializeWeatherState = function(){
    return {
        loading : false,

        editable : false,
        edited : false,
        editing : false,
    
        selected : false,
        refreshing : false,

        create : true,

        error : false,
    }
}

export interface CityListState {
    weather : WeatherState[];
    loading : boolean;
    pending : number;
}

export const initializeweatherListState = function(){
    return {
        loading : false,
        pending : 0
    }
}




