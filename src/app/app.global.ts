import { Injectable } from '@angular/core';

@Injectable()
export class GlobalShared {
  // console.log(window.location.href);
  urlpath: string = ((window.location.href).substr(0,5 ) === 'https') ? 'https://newtech2.herokuapp.com/uploads/' :
    'http://localhost:8080/uploads/';
  serverpath: string = 'http://localhost:8080/api/';
}
