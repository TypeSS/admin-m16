import { Component, HostListener, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

logOut(){
  localStorage.removeItem('id');

  if(!localStorage.getItem('id')){
    this.router.navigateByUrl('login')
  }
}
}
