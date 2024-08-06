import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public items: MenuItem[] = [];


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink:'uncommon'
          }
        ]
      },
      {
        label: 'Pies personalizados',
        icon: 'pi pi-cog',
        items: [

          {
            label: 'Otro elemento',
            icon: 'pi pi-plus',
            routerLink: '/others'
          }
        ]
      }
    ]
  }

}
