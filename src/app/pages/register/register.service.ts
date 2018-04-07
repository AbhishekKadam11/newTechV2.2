import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GlobalShared} from '../../app.global';


@Injectable()
export class RegisterService {
  public loggedIn = false;
  public profileName: string;
  public userId: string;
  public basicdata: string;

  constructor(private http: HttpClient, private globalShared: GlobalShared) {

  }
  

  register(values) {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

    // return this.http
    //   .post(
    //     this.globalShared['serverpath'] + 'signup',
    //     JSON.stringify({data: values}),
    //     {headers}
    //   )
    //   .map(res => res.json())
    //   .map((res) => {
    //     if (res.success) {
    //       console.log(res);
    //     }

    //     return res.success;
    //   });
    return this.http.post(this.globalShared['serverpath'] + 'signup', values)
      .map((res) => {
        console.log(res);
          localStorage.setItem('auth_token', res['token']);
       //      this.authtoken.createAuthorizationHeader(res.token);
          var headers = new Headers({'Authorization': res['token']});
          var loggedIn = true;
          this.setProfileData(res);
          return res;
      }, (err) => {
        return err;
      });
  }

  setProfileData(data) {
    this.profileName = data.profilename;
    // this.userId = data.token;
    this.basicdata = data;
    this.getProfileData();
  }

  public getProfileData() {
    return this.basicdata;
  }

}
