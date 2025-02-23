import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { Icurrentshow } from './icurrentshow';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IShowService } from './ishow-service';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService  {

  constructor(private httpClient:HttpClient) { }

  getCurrentShow(name:string): Observable<Icurrentshow>{
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`
    ).pipe(map(data => this.tarnsformToIcurrentshow(data)));
  }

  private tarnsformToIcurrentshow(data:ICurrentShowData) : 
  Icurrentshow {
    return {
      id: data.id,
      name:data.name,
      type:data.type,
      language:data.language,
      genres:data.genres,
      runtime:data.runtime,
      time:data.schedule.time,
      days:data.schedule.days,
      medium:data.image.medium
    }
  }
}




