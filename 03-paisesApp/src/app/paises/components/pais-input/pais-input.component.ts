import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})

export class PaisInputComponent implements OnInit { //OnInit te permite inicializar el componente una vez ha recibido las propiedades de entrada

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Se utiliza para crear un evento
  
  @Output() onDebounce : EventEmitter<string> = new EventEmitter(); //Se utiliza para crear un evento

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject(); //Subject es un observable
  
  termino: string = '';
  
  ngOnInit() { //ngOnInit se dispara una vez cuando el componente es creado 
    this.debouncer.pipe(debounceTime(300)) //.pipe() es como una tuberia por el cual antes de ejecutarse la funcion final pasa por ahi, debounceTime espera cierta cantidad de milisegundos antes de ejecutar 
      .subscribe ( valor => {
        this.onDebounce.emit( valor )  
      })
  }
  
  buscar() {
    this.onEnter.emit(this.termino); //buscar() emite el termino y en el padre lo recibe
  }
  
  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

}