export class Coord {
    lon: number
    lat: number 

    constructor() {
        this.lon= 0
        this.lat= 0 
    }
}

export class Weather {
    id: number
    main: string
    description: string
    icon: string 

    constructor(){
        this.id = 0
        this.main = ''
        this.description = ''
        this.icon = '' 
    }
}

export class Main {
    temp: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number 

    constructor () {
        this.temp = 0
        this.pressure = 0
        this.humidity = 0
        this.temp_min = 0
        this.temp_max = 0 
    }
}

export class Wind {
    speed: number
    deg: number

    constructor () {
        this.speed = 0
        this.deg = 0
    }
}

export class Clouds {
    all : number
    constructor () {
        this.all = 0
    }
}

export class Sys {
    type: number
    id: number
    message: number 
    country: string
    sunrise: number
    sunset: number 

    constructor(){
        this.type = 0
        this.id = 0
        this.message = 0 
        this.country = ''
        this.sunrise = 0
        this.sunset = 0 
    }
}

export class WeatherMap {

        coord: Coord 
        weather: Weather[]
        base: string
        main: Main 
        visibility: number 
        wind: Wind 
        clouds:Clouds 
        dt: number 
        sys: Sys
        id: number 
        name: string 
        cod: number
        zip_code : number 

        constructor (){


            let weatherTemp = new Weather();

            this.coord = new Coord()
            this.weather = new Array(weatherTemp)
            this.base = ''
            this.main = new Main()
            this.visibility = 0
            this.wind = new Wind()
            this.clouds = new Clouds()
            this.dt = 0
            this.sys = new Sys()
            this.id = 0
            this.name = ''
            this.cod = 0
            this.zip_code = null


        }

}




export default class ItemApi {

        isLoading: boolean; 
        error: boolean; 
        weather : WeatherMap


    constructor(){
        
        this.isLoading = false, 
        this.error = false, 
        this.weather = new WeatherMap()

    }
}

