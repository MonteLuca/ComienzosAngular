import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  
  nombreLower: string = 'luca';
  nombreUpper: string = 'LUCA';
  nombreCompleto: string = 'LuCA MoNTelEoNE';

  fecha: Date = new Date();
  
}