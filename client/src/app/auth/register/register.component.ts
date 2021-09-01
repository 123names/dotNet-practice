import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../_services/auth.service';
import {CustomValidator} from "./custom-validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private formbuilder: FormBuilder){}
  hide_pass = true;

  registerForm:FormGroup;

  ngOnInit(){
    this.registerForm = this.formbuilder.group({
      firstName: [null],
      lastName: [null],
      userName: [null, {validators: [Validators.required, Validators.minLength(2)]}],
      email: [null],
      password: [null, {validators: [Validators.required, Validators.minLength(3)]}],
      confirmPassword: [null, {validators: [Validators.required, Validators.minLength(3)]}]
    },{validators:CustomValidator.isPasswordMatch});
  }

  onSignUp(){
    this.authService.signup({username: this.registerForm.get("userName").value, password: this.registerForm.get("password").value}).subscribe(response=>{
      console.log(response);
    }, error=>{
      console.log(error);
    })
  }

}
