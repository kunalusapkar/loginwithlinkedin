import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  linkedindata:any;
  constructor(private router:Router,
    private route:ActivatedRoute){}
 
  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
     this.linkedindata = JSON.parse(atob(params.linkedindata));
    })
  }
  onclick(){
    this.router.navigate(['thankyou']);
  }
  
}
