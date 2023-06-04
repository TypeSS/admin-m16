import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientinfo: any[] = []
  constructor(private clientes: ClientesService){

  }

  ngOnInit() {
    this.clientes.getUsers().subscribe((res)=>{
      this.clientinfo = res
      console.log(this.clientinfo)
    })
  }
}
