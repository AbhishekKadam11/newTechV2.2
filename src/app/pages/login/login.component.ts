import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {UserService} from './user.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public message: string;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }


  ngOnInit() {
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    console.log(values); 
    if (this.form.valid) {
      this.userService.login(values).subscribe((result) => {
        console.log(result); 
        if (result.success) {
          this.router.navigate(['/pages/dashboard']);
        } else {
          this.message = result.msg;
          setTimeout(() => {
            this.message = '';
          },3000);
      
        }
      }, (error)=>{
         console.log(error); 
        setTimeout(() => {
          delete this.message;
        },3000);
    
      });
    }
  }

}
