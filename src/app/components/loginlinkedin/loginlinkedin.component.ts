import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser,LinkedinLoginProvider } from 'ng4-social-login';
import {UsersService} from '../../services/users.service';     
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loginlinkedin',
  templateUrl: './loginlinkedin.component.html',
  styleUrls: ['./loginlinkedin.component.scss'],
  providers:[UsersService]
})
export class LoginlinkedinComponent implements OnInit {

 itemsReceived:string[]=['']

 getItemsFromServiceClass(){
    this.itemsReceived = this.userService.getitems();
 }
public user: any;
public userdata: any;

  getUser(){
    this.user = this.userService.signInWithLinkedIN()
    .then(data => {
      this.userdata = data;
      let linkedindata:any=data;
      this.router.navigate(['signup'],{
        queryParams:{linkedindata:btoa(JSON.stringify(linkedindata|| null))}
      })
  });
  
  }

 constructor(private userService:UsersService,
  private authService: AuthService,private router:Router,
  private route:ActivatedRoute){}
 

  ngOnInit() {
  }
 

}
