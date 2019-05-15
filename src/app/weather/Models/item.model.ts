export class GeneralItem {
    isLoading : boolean
    error : boolean
    id : number
    city : string
    country : string
    lat : number
    lon : number
    humidity : number
    pressure : number
    temp : number

    constructor () {
        this.isLoading =false
        this.error = false
        this.id = null
        this.city = ''
        this.country = ''
        this.lat = null
        this.lon = null
        this.humidity = null
        this.pressure = null
        this.temp = null
    }


}