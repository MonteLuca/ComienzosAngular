import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // nombre: string = 'Luca';

  // valor: number = 1000;

  // obj = {
  //   nombre: 'Ricardo',
  //   edad: 21
  // };

  // mostrarInfo() {
  //   console.log(this.nombre);
  //   console.log(this.valor);
  //   console.log(this.obj);
  // }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}