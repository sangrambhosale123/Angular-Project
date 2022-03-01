import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewpatientService {

  constructor(private httpClient:HttpClient) { }

  API = "http://localhost:9001/api/v1"

    public getpatients(){
      return this.httpClient.get(this.API + '/patient');
    }

  }
