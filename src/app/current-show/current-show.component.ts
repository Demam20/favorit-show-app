import { Component, OnInit } from '@angular/core';
import { Icurrentshow } from '../icurrentshow';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: Icurrentshow 
  constructor() { 
    this.current = {
      id:139,
      name:'girls',
      type:'scripted',
      language:'English',
      genres:['Drama','Romance',],
      runtime:30,




    } as Icurrentshow



   }

  ngOnInit():void  {
  }

}
