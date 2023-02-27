import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
          label: 'Archivos',
          items: [{
                  label: 'Nuevo', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Proyecto'},
                      {label: 'Otro...'},
                  ]
              },
              {label: 'Abrir'},
              {label: 'Salir'}
          ]
      },
      {
          label: 'Editar',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Eliminar', icon: 'pi pi-fw pi-trash'},
              {label: 'Actualizar', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

}