import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type':'application/json'});
    // return this.http.post('https://udemy-ng-http-40ece.firebaseio.com/data.json',
    //   servers,
    //   {'headers': headers});
    return this.http.put('https://udemy-ng-http-40ece.firebaseio.com/data.json',
    servers,
    {'headers': headers});
  }
  getServers() {
    return this.http.get('https://udemy-ng-http-40ece.firebaseio.com/data.json')
      .map((response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong. Sorry.');
        }
      )
  }

}
