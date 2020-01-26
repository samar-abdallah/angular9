import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  users=[
    {id:1,name:'samar',age:18},
    {id:2,name:'Naglaa',age:19},
    {id:3,name:'Nada',age:20},
    {id:4,name:'Mai',age:21},
    {id:5,name:'Fayza',age:22},
    {id:6,name:'soha',age:33},
    {id:7,name:'mona',age:36},
    {id:8,name:'doha',age:40},
  ]
  constructor() { }
}
