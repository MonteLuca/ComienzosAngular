import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  private apiUrl : string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient ) { } //Inyectamos el HttpClient para poder acceder a sus metodos

  get httpParams() { //Uso httpParams para solo traer esa informacion, el nombre, la capital, el codigo alpha, la bandera y la poblacion
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  } 

  buscarPais( termino: string ) : Observable<Country[]> { //Creamos las interfaces por quicktype y se la definimos como tipo de dato para acceder a las propiedades
    
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url , {params: this.httpParams } );

  }

  buscarCapital(termino : string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams });

  }
  
  buscarPaisPorRegion( region : string): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>(url , {params: this.httpParams } );

  }

  getPaisPorCodigo( id : string): Observable<Country[]> {

    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country[]>(url);

  }

}