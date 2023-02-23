import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [ //Nos permite indicar las diferentes rutas que tengamos

    {
        path: '', //En path se pone como se buscaria, si se coloca '' es un string vacio que suele ser el home
        component: PorPaisComponent,    //en component que nos mostraria
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,

    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', //Para que tome un argumento se coloca :
        component: VerPaisComponent
    },
    {
        path: '**', //Esta es la exception que se activara si se ingresa cualquier otro path que no sea ninguno de los anteriores definidos
        redirectTo: '' //Con el redirectTo le decimos que lo redireccione al home
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //RouterModule se encarga de configurar mis rutas, forRoot dice que son enlaces principales, forChild dice que son las rutas hijas, luego de decir que es forRoot le pasamos el arreglo que es de tipo Routes
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}