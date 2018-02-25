import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {GlobalShared} from '../../app.global';


@Injectable()
export class ProductService {
  constructor(private http: Http, private globalShared: GlobalShared) {

  }

  productDropdownData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        this.globalShared['serverpath'] + 'productDropdownData',
        // 'https://newtechserver.herokuapp.com/api/productDropdownData',
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

  productCategory(values) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.globalShared['serverpath'] + 'productCategory',
      //  'https://newtechserver.herokuapp.com/api/productCategory',
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

  newProductAdd(values) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.globalShared['serverpath'] + 'newProduct',
      //  'https://newtechserver.herokuapp.com/api/newProduct',
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
