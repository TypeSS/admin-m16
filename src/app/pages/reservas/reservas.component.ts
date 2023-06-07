import { Component, OnInit } from '@angular/core';
import { LugaresMesa, Reservas } from 'src/models/reservas/reservas';
import { ReservasService } from 'src/services/reservas/reservas.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {


  resinfo: Reservas[] = []
  selectedRes?: Reservas;
  nlugares:number=0;
  totalLugares:number=0;
  mesasres:LugaresMesa[] = [];
  mEstado: boolean = false;
  mesas?: LugaresMesa[];
  maxlugares:boolean = false;
    constructor(private reservas: ReservasService){

  }

  ngOnInit() {
    this.reservas.getReservas().subscribe((res)=>{
      this.resinfo = res
      console.log(this.resinfo)
    })
  }

  confirmarRes(){
    this.mEstado = true;
    this.nlugares = this.selectedRes!.nPessoas
    this.reservas.getMesasRes(this.selectedRes!.id_restaurante).subscribe((res)=>{
      this.mesasres = res
    })
  }


  confirmarEstado(situacao:string){

    console.log(this.selectedRes)
    const info = {
      "situacao": situacao,
      "id_reserva":this.selectedRes?.id_reserva
    };

    this.reservas.mudarEstado(info).subscribe((res)=>{
      console.log("sucesso!!")
    })



    window.location.reload();
  }


  estadoEncomenda(estado: any){
    switch(estado){
      case 'Pendente':
        return 'warning';
      case 'Aceite':
        return 'success';
      case 'Cancelada':
        return 'danger'
      default:
        return 'erro';
    }
  }

  getLugares(mesainfo:LugaresMesa[]){
    this.totalLugares = 0;
    for (const mesa of mesainfo) {
        this.totalLugares += mesa.lugares;
    }

    if(this.nlugares <= this.totalLugares){
      this.maxlugares = true
    }
    else{
      this.maxlugares = false
    }
  }
}
