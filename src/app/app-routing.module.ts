import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './patientdashboard/invoice/invoice.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientComponent } from './patient/patient.component';
import { PatientappointmentComponent } from './patientdashboard/patientappointment/patientappointment.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';

import { PatientsignupComponent } from './patientsignup/patientsignup.component';
import { ViewdoctorComponent } from './patientdashboard/viewdoctor/viewdoctor.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'Admin', component:AdminComponent},
  { path: 'Doctor', component:DoctorComponent},
  { path: 'Patient', component:PatientComponent},
  { path: 'AdminSignup', component:AdminsignupComponent},
  { path: 'PatientSignup', component:PatientsignupComponent},
  { path: 'DoctorSignup', component:DoctorsignupComponent},
  { path: 'PatientDashboard', component:PatientdashboardComponent},

  { path: 'PatientAppointment', component:PatientappointmentComponent},
  { path: 'ViewDoctor', component:ViewdoctorComponent},


  { path: 'Invoice', component:InvoiceComponent},
  { path: 'Logout', component:LogoutComponent},
  { path: 'AboutUs', component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
