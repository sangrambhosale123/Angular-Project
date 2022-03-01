import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authentication } from "../models/authentication.model";

@Injectable()
export class doctor_loginService{
    constructor(private httpClient:HttpClient) {
        
    }
    loginstatus(
        username : string,
        password : string
    ):Observable<authentication>{
        let body = {
            username : username,
            password : password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
         });
         return this.httpClient.post<authentication>(
            'http://localhost:9001/api/v1/doctor1',
          body,
          {
            headers: headers,
          }
         ); 
    }
}