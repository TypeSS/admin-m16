import { Component, OnInit } from '@angular/core';
import { Func } from 'src/models/restaurante/restaurante';
import { RestauranteService } from 'src/services/restaurante/restaurante.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Func[] = [];
  selectedFunc?:Func;
  funcModal:boolean = false;


  constructor(private resService:RestauranteService){}

  ngOnInit() {
    this.resService.getAdmin().subscribe((res)=>{
      this.funcionarios = res;
      console.log(this.funcionarios)
    })
  }


  updateFunc(){
    this.resService.updateFunc(this.selectedFunc!).subscribe()
    this.funcModal = false;
  }

  deleteFunc(){
    this.resService.deleteFunc(this.selectedFunc!.id_funcionario).subscribe();
    this.funcModal = false;
  }


}
