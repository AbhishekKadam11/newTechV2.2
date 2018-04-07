import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
//import {EmailValidator, EqualPasswordsValidator} from '../../@theme/validators';
import {ReactiveFormsModule, FormsModule, FormGroup, AbstractControl, FormControl, Validators, FormBuilder} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../@theme/validators';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  protected config: {};
  private user: any = {};
  public submitted: boolean = false;
  errors: string[];
  message: string='';
  showMessages: any;
  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;


  constructor(fb:FormBuilder, private registerService: RegisterService, private router: Router) {

  //   this.form = fb.group({
  //     'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  //     'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
  //     'passwords': fb.group({
  //       'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  //       'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
  //     }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
  //   });
    
  //   this.name = this.form.controls['name'];
  //   this.email = this.form.controls['email'];
  //   this.passwords = <FormGroup> this.form.controls['passwords'];
  //   this.password = this.passwords.controls['password'];
  //   this.repeatPassword = this.passwords.controls['repeatPassword'];
  //  this.showMessages = this.getConfigValue('forms.register.showMessages');
  this.form = fb.group({
    'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
    'passwords': fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
  });

  this.name = this.form.controls['name'];
  this.email = this.form.controls['email'];
  this.passwords = <FormGroup> this.form.controls['passwords'];
  this.password = this.passwords.controls['password'];
  this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit() {
  }

  public onSubmit(values: Object): void {
   
   if (this.form.valid) {
      this.registerService.register(values).subscribe((result) => {
        if (result) {
          this.router.navigate(['/pages/dashboard']);
        } 
      },(error) => {
        console.log(error);
        this.message = error['error']['msg'];
      });
    }
  }

}
