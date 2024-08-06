import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "Alejandro";
  public nameUper: string = "ALEJANDRO";
  public fullName: string = "AlEjAnDrO";

  public customDate: Date = new Date();

}
