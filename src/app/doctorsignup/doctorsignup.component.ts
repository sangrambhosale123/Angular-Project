import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { doctor_signupService } from '../services/doctor_signup.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {

  constructor(private router:Router, private doctor_signupService:doctor_signupService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.doctor_signupService.doctor_signup(form.value.d_name,form.value.d_contact_no,form.value.d_gender,form.value.d_password,form.value.d_username,form.value.specilisation).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('Doctor');
    })
   
  }
}
