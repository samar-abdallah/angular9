import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../main-service.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  objUsers=[];
  constructor(_MainServiceService:MainServiceService) {
    this.objUsers=_MainServiceService.users;
   
   }

  ngOnInit() {
  }

}
