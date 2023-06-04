import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/models/reservas/reservas';
import { ReservasService } from 'src/services/reservas/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {


  resinfo: Reservas[] = []
  selectedRes?: Reservas;
  mEstado: boolean = false;
  constructor(private reservas: ReservasService){

  }

  ngOnInit() {
    this.reservas.getReservas().subscribe((res)=>{
      this.resinfo = res
      console.log(this.resinfo)
    })
  }

  mudarEstado(){
    this.mEstado = true;
  }


  updateEstado(situacao:string){

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
}
