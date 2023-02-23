import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})

export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  regionActiva: string = '';

  paises: Country[] = [];
  
  constructor (private paisesService: PaisesService) {}

  getClaseCSS ( region: string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  mostrarRegion( region: string) {

    if( region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    
    this.paisesService.buscarPaisPorRegion(region)
    .subscribe ( (pais) => {
      this.paises = pais;
    } )
    
  }

}