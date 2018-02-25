import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {GlobalShared} from '../../app.global';


@Injectable()
export class ProductDetailsService {
  constructor(private http: Http, private globalShared: GlobalShared) {

  }

  productDescriptionData(pid) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        this.globalShared['serverpath'] + 'productDescriptionData/' + pid,
        //'https://newtechserver.herokuapp.com/api/productDescriptionData/' + pid,
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          return res.success;
        } else {
          return res;
        }

      });
  }

}
