import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'products-order',
    templateUrl: './order.component.html',
    styles: [],
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.green
    }
  ]


  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  toggleSortBy(value: keyof Hero) {
    this.sortBy = value;
  }

}
