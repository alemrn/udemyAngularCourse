import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: ``
})
export class ByContryPageComponent {

   public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCapital(term: string) {
    this.countryService.searchCountries(term, 'name').subscribe((resp: Country[]) => {
      this.countries = resp.sort((n1, n2) => n2.population - n1.population);
    });
  }
}
