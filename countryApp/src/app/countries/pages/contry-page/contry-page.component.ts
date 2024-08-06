import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styles: ``
})
export class ContryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.countryService.searchById(id) )
    ).subscribe((resp) => {
      if (!resp) {
        return this.router.navigateByUrl('by-capital');
      }
      console.log('Tenemos un pais');
      console.log(resp);

      return this.country = resp;
    })
  }

}
