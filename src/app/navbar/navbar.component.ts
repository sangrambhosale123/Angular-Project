import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shareService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  status:string|undefined;
  constructor(private shareService:SharedService) { }

  ngOnInit(): void {
    this.shareService.isActive.subscribe((res)=>{
      this.status = res;
    })
  }

}
