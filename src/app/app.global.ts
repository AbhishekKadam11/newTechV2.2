import { Injectable } from '@angular/core';

@Injectable()
export class GlobalShared {
  // console.log(window.location.href);
  urlpath: string = ((window.location.href).substr(0,4 ) === 'http') ? 'http://localhost:8080/uploads/' :
    'https://newtech2.herokuapp.com/';
  serverpath: string = ((window.location.href).substr(0,4 ) === 'http') ? 'http://localhost:8080/api/' :
    'https://newtechserver.herokuapp.com/api/';
}
