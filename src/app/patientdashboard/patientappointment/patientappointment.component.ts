import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patient_appointment } from 'src/app/services/patient_appointment.service';
import { usernameService } from 'src/app/services/usernameService.service';

@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})
export class PatientappointmentComponent implements OnInit {

  constructor(private router:Router, private appointment_service:patient_appointment,private usernameService:usernameService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      alert('Please Login First');
      this.router.navigateByUrl('');
    }
  }
  onSubmit(form:NgForm){
    this.appointment_service.appointment(form.value.p_name,form.value.ap_date,form.value.city,form.value.symptom,form.value.gender,form.value.ap_time).subscribe((res)=>{
      console.log(res);
      this.usernameService.setAppointment(res);
      this.router.navigateByUrl('PatientDashboard');
    })
  }
}
