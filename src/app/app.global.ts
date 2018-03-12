import { Injectable } from '@angular/core';

@Injectable()
export class GlobalShared {
  // console.log(window.location.href);
  // urlpath: string = ((window.location.href).substr(0,5 ) === 'https') ? 'https://newtechserver.herokuapp.com/uploads/' :
  //   'http://localhost:8080/uploads/' ;
  // serverpath: string = ((window.location.href).substr(0,5 ) === 'https') ? 'https://newtechserver.herokuapp.com/api/' :
  //   'http://localhost:8080/api/';
  urlpath: string = 'https://newtechserver.herokuapp.com/uploads/';
  serverpath: string = 'https://newtechserver.herokuapp.com/api/';
}
