import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patient_signupService } from '../services/patient_signup.service';

@Component({
  selector: 'app-patientsignup',
  templateUrl: './patientsignup.component.html',
  styleUrls: ['./patientsignup.component.css']
})
export class PatientsignupComponent implements OnInit {

  constructor(private router:Router,private patient_signupService:patient_signupService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.patient_signupService.patient_signup(form.value.dob,form.value.p_name,form.value.p_contact_no,form.value.gender,form.value.p_password,form.value.p_username).subscribe(()=>{
      alert('Thank you for sign up');
    this.router.navigateByUrl('Patient');
    })
    
  }
}
