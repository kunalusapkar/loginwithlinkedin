import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginlinkedinComponent } from './components/loginlinkedin/loginlinkedin.component';
import { ThankyoucomponentComponent } from './components/thankyoucomponent/thankyoucomponent.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider }
   from 'ng4-social-login';
import {UsersService} from './services/users.service';   
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';




  const config = new AuthServiceConfig([
    {
      id: LinkedinLoginProvider.PROVIDER_ID,
      provider: new LinkedinLoginProvider('81u8z54m75jvfy')
    }
  ],false);
  
  
  
  export function provideConfig() {
    return config;
  }

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginlinkedinComponent,
    ThankyoucomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
    },
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
