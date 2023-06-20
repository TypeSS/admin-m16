import { Component, OnInit } from '@angular/core';
import { Encomendas, ProdEnc } from 'src/models/restaurante/restaurante';
import { RestauranteService } from 'src/services/restaurante/restaurante.service';

export interface estado{
  estado:string;
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
  selectedEstado?:estado;
  estados:estado[]=[{estado:"Preparação"},{estado:"A caminho"}, {estado:"Entregue"}]

  constructor(private restService: RestauranteService){}

  ngOnInit() {
    this.restService.getEncomenda().subscribe((res)=>{
      this.encomendas = res
    })
  }

  encInfo(){
    this.selectedEstado!.estado = ''
    this.abrirEnc = true;
    this.restService.getProdEnc(this.selectedEnc!.id_encomenda).subscribe((res)=>{
      this.prodInfo = res
    });
  }


  UpdateEstado(teste:any){
    console.log(teste)
  }
}
