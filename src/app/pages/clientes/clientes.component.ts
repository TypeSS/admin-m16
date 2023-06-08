import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/models/clientes/clientes';
import { ClientesService } from 'src/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientinfo: Clientes[] = [];
  selectedCli?:Clientes;
  cliModal:boolean = false;

  constructor(private clientes: ClientesService){
  }

  ngOnInit() {
    this.clientes.getUsers().subscribe((res)=>{
      this.clientinfo = res
    })
  }

  clienteInfo(){
    this.cliModal = true;
  }

  updateCliente(){
    this.clientes.updateCliente(this.selectedCli!).subscribe((res)=>{
      console.log("sucesso?")
    })
    this.cliModal = false;
  }
}
