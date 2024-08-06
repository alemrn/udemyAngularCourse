import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountries(query: string, by: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/${by}/${query}`;
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  searchById(id: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url).pipe(
      map(countries=>countries.length>0 ? countries[0] : null),
      catchError((error) => of(null)));
  }
}
