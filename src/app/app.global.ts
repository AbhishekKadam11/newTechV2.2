import { Injectable } from '@angular/core';

@Injectable()
export class GlobalShared {
  // console.log(window.location.href);
  urlpath: string = 'http://localhost:8080/uploads/';
  serverpath: string = ((window.location.href).substr(0,5 ) === 'https') ? 'http://localhost:8080/api/' :
    'https://newtechserver.herokuapp.com/api/';
}
