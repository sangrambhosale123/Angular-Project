import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appointment } from 'src/app/models/appointment.model';
import { usernameService } from 'src/app/services/usernameService.service';
import { viewDoctorService } from 'src/app/services/view_doctor.service';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {
  d_name:string|undefined;
  d_gender:string|undefined;
  d_contact_no:string|undefined;
  specilisation:string|undefined;
  appointment:appointment|undefined;
  constructor(private router:Router, private viewDoctorService:viewDoctorService,private usernameService:usernameService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      this.router.navigateByUrl('');
    }
    this.viewDoctorService.sendRequest().subscribe((res)=>{
      console.log(res);
      console.log( res.specilisation);
      this.d_name = res.d_name;
      this.d_gender = res.d_gender;
      this.d_contact_no = res.d_contact_no;
      this.specilisation = res.specilisation;
      this.appointment = this.usernameService.getAppointment();
      console.log(this.appointment);
    })
  }

}
