import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //ElementeRef es un tipo de dato, para decirle que proviene de un input se coloca en el generico <HTMLInputElement>
  //ViewChild busca en el HTML un elemento que tenga una referencia local y lo va a asignar a una variable.
  //El signo de exclamacion luego de txtBuscar! es el operador non null assertion operator, es para decirle a TS que ese elemento siempre va a tener algo  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log( valor );
    this.txtBuscar.nativeElement.value = '';
  }

}
