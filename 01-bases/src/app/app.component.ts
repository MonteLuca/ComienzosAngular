import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  //templateUrl nos permite trabajar con el template separado, el app.component.html que esta en la misma carpeta pero aparte. template nos permite hacer todo el codigo HTML aqui mismo.
})
export class AppComponent {
  titulo: string = 'Contador App';

  numero: number = 10;

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}