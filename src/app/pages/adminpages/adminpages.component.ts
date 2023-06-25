import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-adminpages',
  templateUrl: './adminpages.component.html',
  styleUrls: ['./adminpages.component.css']
})
export class AdminpagesComponent implements OnInit {
  logado:boolean = false;

  constructor(private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('id')){
    this.logado = true;
    }
    else{
      this.logado = false;
      this.router.navigateByUrl('/login')
    }
  }
}
