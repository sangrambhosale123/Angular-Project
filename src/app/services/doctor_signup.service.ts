import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { doctor } from "../models/doctor.model";
@Injectable()
export class doctor_signupService{
    constructor(private httpClient:HttpClient) {}
    doctor_signup(
        d_name:string,
        d_contact_no:string,
        d_gender:string,
        d_password:string,
        d_username:string,
        specilisation:string,
    ):Observable<doctor>{
        let body = {
            d_name : d_name,
            d_contact_no :  d_contact_no,
            d_gender : d_gender,
            d_password : d_password,
            d_username : d_username,
            specilisation : specilisation,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<doctor>(
            'http://localhost:9001/api/v2/doctor',
            body,
            {
              headers: headers,
            }
        );
    }
}