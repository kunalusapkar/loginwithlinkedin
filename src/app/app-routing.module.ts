import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginlinkedinComponent } from './components/loginlinkedin/loginlinkedin.component';
import { ThankyoucomponentComponent } from './components/thankyoucomponent/thankyoucomponent.component';


const routes: Routes = [
  {path:'',component:LoginlinkedinComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'thankyou',component:ThankyoucomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
