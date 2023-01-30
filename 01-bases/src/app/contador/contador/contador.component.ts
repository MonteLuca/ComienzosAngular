import { Component} from '@angular/core'
//Cuanta con la misma estructura que el app.component.ts
@Component({
    selector: 'app-contador',
    //El selector se coloca en el app.component.html para que funcione
    template: `
    <h1> {{titulo}} </h1>
    <h3>La base es <strong> {{base}} </strong></h3>
    <button (click)=" acumular(base); "> + {{base}} </button>
    <span> {{numero}} </span>
    <button (click)=" acumular(- base); "> + {{base}} </button>
    `
})
//Para que esto funcione tenemos que insertarlo en un modulo.
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    acumular(valor: number) {
        this.numero += valor;
    }
}