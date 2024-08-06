import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryService } from './services/countries.service';
import { CountryTableComponent } from './components/CountryTable/country-table.component';



@NgModule({
  declarations: [
    ByContryPageComponent,
    ByRegionPageComponent,
    ContryPageComponent,
    ByCapitalPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class CountriesModule { }
