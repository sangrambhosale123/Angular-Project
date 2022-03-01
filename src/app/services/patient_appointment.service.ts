import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { appointment } from "../models/appointment.model";

@Injectable()
export class patient_appointment{
constructor(private httpClient:HttpClient) {
    
}
appointment(
   p_name : string,
   ap_date : Date,
   city : string,
   symptom : string,
   gender : string,
   ap_time : string,
):Observable<appointment>{
    let body = {
        p_name : p_name,
        ap_date : ap_date,
        city : city,
        gender : gender,
        ap_time :  ap_time,
        symptoms : symptom
    };
    let headers = new HttpHeaders({
        'content-type': 'application/json',
    });
    return this.httpClient.post<appointment>(
        'http://localhost:9001/api/v1/appointment',
        body,
        {
          headers: headers,
        }
    );
}
}