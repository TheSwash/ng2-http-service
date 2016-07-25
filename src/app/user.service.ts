import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';

/**
 * UserService
 */
@Injectable()
export class UserService {
  constructor(private _http: Http) { }

  getuser(): Observable<any> {
    return this._http.get('http://localhost:4200/api/users.json')
      .map(res => res.json());
  }
}
