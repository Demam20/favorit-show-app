import { Component, OnInit } from '@angular/core';
import { Icurrentshow } from '../icurrentshow';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: Icurrentshow 
  constructor(private showService:ShowService) { 
    



   }

  ngOnInit(): void {
    this.showService.getCurrentShow('girls').subscribe(data => this.current = data);
  }

}
