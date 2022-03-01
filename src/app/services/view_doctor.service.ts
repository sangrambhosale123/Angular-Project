import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { doctor } from "../models/doctor.model";

@Injectable()
export class viewDoctorService{
    constructor(private httpClient:HttpClient) {
        
    }
    sendRequest():Observable<doctor>{
        let headers = new HttpHeaders({
            'content-type': 'application/json',
         });
         return this.httpClient.get<doctor>(
            'http://localhost:9001/api/v2/doctor/1',
          {
            headers: headers,
          }
         ); 
    }
}