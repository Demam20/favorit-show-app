import { Icurrentshow } from './icurrentshow';
import { Observable } from 'rxjs';

export interface IShowService {
  getCurrentShow(name:string) : Observable<Icurrentshow>
}
