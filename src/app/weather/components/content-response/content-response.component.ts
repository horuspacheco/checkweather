import { Component, OnInit, Input } from '@angular/core';
import ItemApi from '../../Models/weather.model';

@Component({
  selector: 'app-content-response',
  templateUrl: './content-response.component.html',
  styleUrls: ['./content-response.component.css']
})
export class ContentResponseComponent implements OnInit {

  @Input() id : number
  @Input() isLoading:boolean
  @Input() error:boolean
  @Input() name:string
  @Input() country:string
  @Input() temp:number
  @Input() description:string
  @Input() lat:number
  @Input() lon:number
  @Input() pressure:number
  @Input()  humidity:number
  @Input() date:string
  @Input() forecast:boolean
  @Input() weather:boolean

  constructor() { }

  ngOnInit() {
  }

}
