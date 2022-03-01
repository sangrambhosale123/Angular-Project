import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authentication } from '../models/authentication.model';
import { patient_loginService } from '../services/patient_login.service';
import { SharedService } from '../services/shareService.service';
import { usernameService } from '../services/usernameService.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  authentication:authentication|undefined;
  status:string|undefined;
  
  constructor(private router:Router,private patient_loginService:patient_loginService, private shareService:SharedService, private usernameService:usernameService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    
    this.patient_loginService.loginstatus(form.value.username,form.value.password).subscribe((res)=>{
      this.authentication = res;
      this.status = res.status;
      this.shareService.isActive.emit(this.status);
      console.log(res);
      if(this.authentication.type && this.authentication.status==="active"){
        var succ = res;
        localStorage.setItem('user',JSON.stringify(succ));
        this.usernameService.setUsername(this.authentication.username);
        alert('Login Successful');
        this.router.navigateByUrl('PatientDashboard');
      }
      else{
        alert('Invalid Crediential');
      }
    })
  }
  Signup(form:NgForm){
    this.router.navigateByUrl('PatientSignup');
  }
}
