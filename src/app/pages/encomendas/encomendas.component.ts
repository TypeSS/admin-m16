import { Component, OnInit } from '@angular/core';
import { Encomendas, ProdEnc } from 'src/models/restaurante/restaurante';
import { RestauranteService } from 'src/services/restaurante/restaurante.service';

export interface estado{
  code:string;
  name:string;
}


@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit{

  encomendas:Encomendas[] = [];
  selectedEnc?:Encomendas;
  abrirEnc:boolean = false;
  prodInfo:ProdEnc[] = [];
  selectedEstado?:string;
  estados:estado[]=[{code:"Preparação",name:"Preparação"},{code:"A caminho",name:"A caminho"}, {code:"Entregue",name:"Entregue"}]
  enc:any = {};
  constructor(private restService: RestauranteService){}

  ngOnInit() {
    this.restService.getEncomenda().subscribe((res)=>{
      this.encomendas = res
    })
  }

  encInfo(){
    console.log(this.selectedEnc?.estado)
    this.selectedEstado = this.selectedEnc?.estado;
    console.log(this.selectedEstado)
    this.abrirEnc = true;
    this.restService.getProdEnc(this.selectedEnc!.id_encomenda).subscribe((res)=>{
      this.prodInfo = res
    });
  }


  UpdateEstado(){
    this.enc={
      'id_encomenda':this.selectedEnc?.id_encomenda,
      'estado':this.selectedEstado
    }

    this.restService.updateEnc(this.enc).subscribe()
  }
}
