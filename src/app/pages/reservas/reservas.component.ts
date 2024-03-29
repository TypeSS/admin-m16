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
  labelLugares:string = "";

    constructor(private reservas: ReservasService){

  }

  ngOnInit() {
    this.reservas.getReservas().subscribe((res)=>{
      this.resinfo = res
    })
  }

 gerirRes(){

  if(this.selectedRes?.situacao == "Aceite" || this.selectedRes?.situacao == "Cancelada"){
    this.mEstado = false;
  }
  else{
    this.mEstado = true;
    this.nlugares = this.selectedRes!.nPessoas
    this.reservas.getMesasDispo(this.selectedRes!.id_restaurante).subscribe((res)=>{
      this.mesasres = res
    })
    this.mesas = []
    this.totalLugares = 0;
    this.labelLugares = "Lugares Insuficientes"
  }

  }


  confirmarRes(situacao:string){

    if (situacao == "Aceite"){
      this.selectedRes!.situacao = situacao
    const info = {
      "situacao": situacao,
      "id_reserva":this.selectedRes?.id_reserva
    };


    this.reservas.mudarEstado(info).subscribe((res)=>{
      console.log("sucesso!!")
    })

    const ReservaMesa = this.mesasres.map((mesa) => {
      return {
        id_reserva: this.selectedRes!.id_reserva,
        id_mesa: mesa.id_mesa,
        data:this.selectedRes!.data,
        horas: this.selectedRes!.horas,
        id_restaurante: this.selectedRes!.id_restaurante,
      };
    });

      this.reservas.mesaRes(ReservaMesa).subscribe((res)=>{
        console.log("sucesso?")
      })

      this.mEstado = false;
    }
    else{
      this.mEstado = false;
    }
  }


  estadoReserva(estado: any){
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
      this.mesasres = mesainfo
      this.labelLugares = "Lugares Suficientes"
    }
    else{
      this.maxlugares = false
      this.labelLugares = "Lugares Insuficientes"
    }
  }
}
