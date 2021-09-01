import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../_services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{

  user:any = {}
  constructor(public authService: AuthService) { }

  isLoading = false;

  ngOnInit() {

  }
  login(){
    this.authService.login(this.user).subscribe(responseData=>{
      console.log(responseData);
    }, error=>{
      console.log(error);
    });
  }

  logout(){
    this.authService.logout();
  }
}
