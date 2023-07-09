import { Component, OnInit } from '@angular/core';
import { Func } from 'src/models/restaurante/restaurante';
import { AdminService } from 'src/services/admin/admin.service';
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


  constructor(private adminService:AdminService){}

  ngOnInit() {
    this.adminService.getAdmin().subscribe((res)=>{
      this.funcionarios = res;
      console.log(this.funcionarios)
    })
  }


  updateFunc(){
    this.adminService.updateAdmin(this.selectedFunc!).subscribe()
    this.funcModal = false;
  }

  deleteFunc(){
    this.adminService.deleteAdmin(this.selectedFunc!.id_funcionario).subscribe();
    this.funcModal = false;
  }


}
