import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {GlobalShared} from '../../app.global';


@Injectable()
export class RegisterService {
  constructor(private http: Http, private globalShared: GlobalShared) {

  }

  register(values) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.globalShared['serverpath'] + 'signup',
        JSON.stringify({data: values}),
        {headers}
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          console.log(res);
        }

        return res.success;
      });
  }

}
