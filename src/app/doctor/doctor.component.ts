import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authentication } from '../models/authentication.model';
import {  doctor_loginService } from '../services/doctor_login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  authentication:authentication|undefined;
  constructor(private router:Router, private doctor_loginService:doctor_loginService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.doctor_loginService.loginstatus(form.value.username, form.value.password).subscribe((res)=>{
      this.authentication = res;
      if(this.authentication.type && this.authentication.status==="active"){
        this.router.navigateByUrl('DoctorDashboard');
        //this.router.navigateByUrl('PatientDashboard');
      }
      else{
        alert('Invalid Crediential');
      }
    })
    }
    Signup(form:NgForm){
      this.router.navigateByUrl('DoctorSignup');
    }
}
  