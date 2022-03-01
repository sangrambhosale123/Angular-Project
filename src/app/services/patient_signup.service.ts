import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { patient } from "../models/patient.model";

@Injectable()
export class patient_signupService{
    constructor(private httpClient:HttpClient) {}
    patient_signup(
    dob:Date,
    p_name:string,
    p_contact_no:string,
    p_gender:string,
    p_password:string,
    p_username:string,
    ):Observable<patient>{
        let body = {
            dob : dob,
            p_name : p_name,
            p_contact_no : p_contact_no,
            p_gender : p_gender,
            p_password :  p_password,
            p_username : p_username
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<patient>(
            'http://localhost:9001/api/v4/patient',
            body,
            {
              headers: headers,
            }
        );
    }
}