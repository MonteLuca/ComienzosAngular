import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent //Exportamos el Sidebar lo utilazaremos en el AppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
