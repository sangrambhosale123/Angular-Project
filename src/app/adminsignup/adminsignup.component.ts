import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 onSubmit(form:NgForm){
   console.log(form.value.username);
   console.log(form.value.password);
   this.router.navigateByUrl('Admin')
 }
}
