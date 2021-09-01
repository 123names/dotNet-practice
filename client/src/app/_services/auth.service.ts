import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { ReplaySubject } from "rxjs";
import { map } from "rxjs/operators"
import { environment } from "src/environments/environment";
import { User } from "../_models/user";

const BACKEND_URL = environment.apiURL+"/account/";

@Injectable({
  providedIn: 'root',
 })
export class AuthService{
  constructor(private httpClient:HttpClient, private route:Router){}

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  login(model:any){
    return this.httpClient.post(BACKEND_URL+"login", model).pipe(
      map((response:User)=>{
        const user = response;
        if (user){
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
          this.route.navigate([""]);
        }
        return "Successful login";
      })
    );
  }

  signup(model:any){
    return this.httpClient.post(BACKEND_URL+"register", model).pipe(
      map((response:User) =>{
        const user = response;
        if (user){
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
          this.route.navigate([""]);
        }
        return "Successful register";
      })
    );
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }
}
