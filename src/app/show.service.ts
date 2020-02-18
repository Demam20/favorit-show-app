import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { Icurrentshow } from './icurrentshow';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient:HttpClient) { }

  getCurrentShow(name:string): Observable<Icurrentshow>{
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`
    ).pipe(map(data => this.tarnsformToIcurrentshow(data)));
  }

  private tarnsformToIcurrentshow(data:ICurrentShowData) : Icurrentshow {
    return {
      id: data.show.id,
      name:data.show.name,
      type:data.show.type,
      language:data.show.language,
      genres:data.show.genres,
      runtime:data.show.runtime



    }


  }
}
