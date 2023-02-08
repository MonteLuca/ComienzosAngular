import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial; //Esto va a retornar el arreglo de String que definimos en el servicio 
  }

  constructor(private gifsService: GifsService) {} //Inyectamos el servicio 

  buscar( termino: string ) {
    this.gifsService.buscarGifs(termino);
  }

}