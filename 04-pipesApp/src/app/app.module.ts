import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//Modulo personalizado
import { AppRoutesModule } from './app-routes.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la App
import localeEs from '@angular/common/locales/es-AR'
import localeJa from '@angular/common/locales/ja'
import { registerLocaleData } from '@angular/common'

registerLocaleData( localeEs ); 
registerLocaleData( localeJa ); 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }