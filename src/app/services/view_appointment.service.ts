import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewappointmentService {

  constructor(private httpClient:HttpClient ) { }

  API = "http://localhost:8083/api/v1"

    public getappointment(){
      return this.httpClient.get(this.API + '/appointment');
    }

    public deleteappoinment(ap_id:any){
      return this.httpClient.delete(this.API + '/appointment/{AP_ID}' + ap_id);
    }

   
  }
