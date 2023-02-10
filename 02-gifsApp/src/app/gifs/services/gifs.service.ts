import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root' //Al especificar el providedIn : 'root' en el decorador le dice a Angular que no importa en qué parte de su aplicación sea que estén, este servicio va a ser único y de manera global en el root. 
})

export class GifsService {

  private apiKey: string = 'NkdQ6fpAGYu9lgbCpDtVwELjaMdoL6cP'; //Esta es la ApiKey que nos proporciona Gifty

  private servicioURL: string = 'https://api.giphy.com/v1/gifs';  //Esta es la URL de Gifty

  private _historial : string[] = []; //Esto se encarga de guardar las busquedas

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]; //Rompemos la relacion para que no modifique el arreglo
  }

  constructor ( private http: HttpClient) {

    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];

    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];

    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

  }

  buscarGifs(query:string) {

    query = query.trim().toLocaleLowerCase(); //.trim() quita los espacios en blanco, y toLocaleLowerCase(), pasa todo a minuscula
    
    if (!this._historial.includes(query)){ //Este if se encarga de no guardar en el historial busquedas repetidas

      //Se encarga que el Sidebar solo almacene las ultimas 10 busquedas
      this._historial.unshift(query); //unshift se encarga de agregar elementos al inicio del Array
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial) );

    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit' , '10')
          .set('q', query);

    this.http.get<SearchGIFResponse>(`${this.servicioURL}/search`,{params})
    .subscribe( (resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados) )
    });
  }

}