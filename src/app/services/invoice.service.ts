import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { invoice } from "../models/invoice.model";

@Injectable()
export class invoiceService{
    constructor(private httpClient:HttpClient) {
        
    }
    sendRequest():Observable<invoice>{
        let headers = new HttpHeaders({
            'content-type': 'application/json',
         });
         return this.httpClient.get<invoice>(
            'http://localhost:9001/api/v1/invoice',
          {
            headers: headers,
          }
         ); 
    }
}