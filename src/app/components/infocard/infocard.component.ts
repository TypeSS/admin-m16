import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent {
  @Input()
  valor:any = 0;
@Input()
  corBackground:String = "#FFFF00";
@Input()
  descricao:String = "";
@Input()
  corBackgroundIcon:String = "#FF00FF";
@Input()
  // icones:String = "<path stroke-linecap='round' stroke-linejoin='round' d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12' />";
  icones:String = "";
@Input()
  tipoIcon:string = "material-icons-outlined";
}
