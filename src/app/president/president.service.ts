import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class PresidentService {

  constructor(private http: Http) {
  }

  getPresidents() : Observable<Response> {
    return this.http.get('/assets/presidents.json');
  }

}
