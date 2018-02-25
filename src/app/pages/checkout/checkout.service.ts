import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from './../../app.httpclient';

@Injectable()
export class CheckoutService {

 // public cart: any = {};

  constructor(private http: HttpClient) {

  }
  placeOrder(values) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
       //    'http://localhost:8080/api/placeOrder',
         'https://newtechserver.herokuapp.com/api/placeOrder',
        JSON.stringify({data: values}),
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
