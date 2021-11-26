import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: [
    './incrementador.component.css',
  ]
})
export class IncrementadorComponent {

 @Input() progreso:number= 50;
 @Input() btnClass: string = 'btn btn-primary'

 @Output() valorSalida: EventEmitter<number> = new EventEmitter();
 

  cambiarValor(valor: number){
    if(this.progreso >=100 && valor >=0){
      this.valorSalida.emit(100);
     return this.progreso = 100;
    }
    if(this.progreso <=0 && valor < 0){
      this.valorSalida.emit(0);
      
      return this.progreso = 0;
    }
    this.valorSalida.emit(this.progreso);
    this.progreso =  this.progreso + valor;
  }

  onChange( valor: number ){
    this.valorSalida.emit(this.progreso);
  }

}
