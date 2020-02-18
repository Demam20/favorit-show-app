import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient:HttpClient) { }
  getCurrentShow(name:string): Icurrentshow{
    return
    this.httpClient.get<ICurrentShowData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`

    )
  }
}
