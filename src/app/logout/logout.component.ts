import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shareService.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private shareService:SharedService) { }

  ngOnInit(): void {
    localStorage.removeItem('user');
    localStorage.clear();
    this.shareService.isActive.emit('');
    this.router.navigateByUrl('')
  }

}
