import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCapital(term: string) {
    this.countryService.searchCountries(term, 'capital').subscribe((resp: Country[]) => {
      this.countries = resp.sort((n1, n2) => n2.population - n1.population);
    });
  }
}
