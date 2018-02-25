import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  // children: [{
  //   path: 'login',
  //   component: SmartTableComponent,
  // }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }

export const routedComponents = [
  LoginComponent,

];
