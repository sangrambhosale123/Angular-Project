import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usernameService } from '../services/usernameService.service';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {
  username:string|undefined;
  constructor(private usernameService:usernameService, private router:Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      alert('Please Login First');
      this.router.navigateByUrl('');
    }
    this.username = this.usernameService.getUsername();
  }

}
