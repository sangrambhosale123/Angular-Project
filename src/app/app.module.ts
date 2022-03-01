import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { patient_signupService } from './services/patient_signup.service';
import { PatientsignupComponent } from './patientsignup/patientsignup.component';
import { patient_loginService } from './services/patient_login.service';
import {  PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { SharedService } from './services/shareService.service';
import { LogoutComponent } from './logout/logout.component';
import { PatientappointmentComponent } from './patientdashboard/patientappointment/patientappointment.component';
import { ViewdoctorComponent } from './patientdashboard/viewdoctor/viewdoctor.component';
import { InvoiceComponent } from './patientdashboard/invoice/invoice.component';
import { usernameService } from './services/usernameService.service';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { doctor_signupService } from './services/doctor_signup.service';
import { patient_appointment } from './services/patient_appointment.service';
import { doctor_loginService } from './services/doctor_login.service';
import { invoiceService } from './services/invoice.service';
import { viewDoctorService } from './services/view_doctor.service';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    DoctorComponent,
    PatientComponent,
    AdminsignupComponent,
    DoctorsignupComponent,
    PatientsignupComponent,
   PatientdashboardComponent,
    LogoutComponent,
    PatientappointmentComponent,
    ViewdoctorComponent,
    InvoiceComponent,
    PatientdashboardComponent,
    FooterComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [patient_signupService,patient_loginService,SharedService,usernameService,doctor_signupService,patient_appointment,doctor_loginService,invoiceService,viewDoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
