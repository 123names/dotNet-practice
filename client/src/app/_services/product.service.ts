import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiURL+"/Product/";

@Injectable({
  providedIn: 'root',
 })
export class ProductService{
  constructor(private httpClient:HttpClient, private route:Router){}

  getProductList(){
    return this.httpClient.get(BACKEND_URL);
  }

}
