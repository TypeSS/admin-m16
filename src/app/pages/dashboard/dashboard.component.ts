import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/services/clientes/clientes.service';
import { ReservasService } from 'src/services/reservas/reservas.service';
import { RestauranteService } from 'src/services/restaurante/restaurante.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Usercount:number = 0;
  ResCount:number = 0
  lucro:number = 0;
  constructor(private cliService:ClientesService, private resService:ReservasService, private restService:RestauranteService){}

  ngOnInit(){
    this.cliService.count().subscribe((res)=>{
      this.Usercount = Number(res.Count);
    })

    this.resService.ResCount().subscribe((res)=>{
      this.ResCount = res.ResCount
    })

    this.restService.lucro().subscribe((res)=>{
      this.lucro = res.soma
      console.log(res)
    })
  }
}
