import { Injectable } from '@angular/core';
import { IShowService } from './ishow-service';
import { Icurrentshow } from './icurrentshow';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowFakeService implements IShowService {
  private fakeShow: Icurrentshow = {
    name:'anything',
    type:'puplic',
    language:'arabic',
    id:88,
    time:'88',
    genres:['woow'],
    medium:'',
    days:['friday'],
    runtime: 100

  }

  constructor() { }
  public getCurrentShow(name:string):
  Observable<Icurrentshow>{
    return of(this.fakeShow);
  }
  
}
