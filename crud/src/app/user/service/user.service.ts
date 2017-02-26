import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  getComments() {
    return this.http.get(this.commentsUrl)
      .map((response: Response) => response.json());
      // .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

}
