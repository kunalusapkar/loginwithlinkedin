import { Injectable } from '@angular/core';
import { AuthService,SocialUser,LinkedinLoginProvider } from 'ng4-social-login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  items:string[]=['Whey','BCAA','Creatine','Fat Burner'];


  getitems(): string[]{
    return this.items;
  }
  public user: any = SocialUser;
  constructor(private authService:AuthService){}

  signInWithLinkedIN(): Promise<any>  {
    return this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID)
    
  }
 
}
