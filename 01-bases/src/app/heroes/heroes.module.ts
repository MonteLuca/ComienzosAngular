import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //En las declarations son los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Se colocan que cosas quiero que sean publicas, es decir, visible para el resto de la app
        ListadoComponent
    ],
    imports: [ //En los imports se colocan mayoritariamente modulos
        CommonModule
    ]
})

export class HeroesModule {

}