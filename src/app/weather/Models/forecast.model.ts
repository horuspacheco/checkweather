export class City {

    id:number
    name:string
    coord: Coord
    country:string

    constructor(){
        this.id = null,
        this.name = '',
        this.country = ''
        this.coord = new Coord()
    }
}

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

export class Clouds {
    all : number
    constructor () {
        this.all = 0
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





export class Sys {
    pod: string

    constructor(){
        this.pod = ''
    }
}

export class List {

    dt : number //time UNIX
    main : Main
    weather : Weather[]
    clouds : Clouds
    wind : Wind
    sys : Sys
    dt_txt : string //DATE TEXT

    constructor(){
        let weatherTemp = new Weather();
        this.dt = 0
        this.main = new Main()
        this.weather = new Array(weatherTemp)
        this.clouds = new Clouds()
        this.wind = new Wind()
        this.sys = new Sys()
        this.dt_txt = ''
    }
}




export class  ForecastMap {
        cod: number
        message:number
        cnt:number
        city : City
        list : List[]

        constructor (){
            let listTemp = new List();
            this.cod = 0;
            this.message = 0
            this.cnt = 0
            this.city = new City()
            this.list = new Array(listTemp);
        }
}




export default class ForecastApi {
        isLoading: boolean; 
        error: boolean; 
        weather : ForecastMap

    constructor(){
        this.isLoading = false, 
        this.error = false, 
        this.weather = new ForecastMap()

    }
}

