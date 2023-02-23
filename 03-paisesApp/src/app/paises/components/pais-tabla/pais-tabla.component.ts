import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})

export class PaisTablaComponent {

  @Input()
  paises : Country[] = [];

}