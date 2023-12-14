import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of ,map } from 'rxjs';
import { Country } from '../interfaces/contry';

@Injectable({providedIn: 'root'})
export class ContriesService {
    
  private urlService:string = 'https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }
    
  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${ this.urlService }/alpha/${ code }`;
    return this.httpClient.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }
  
    searchCapital( capital:string):Observable<Country[]>  {
      const url = `${this.urlService}/capital/${capital}`
        return this.httpClient.get<Country[]>(url)
                .pipe( 
                    catchError( () => of ([]) ) 
                  );
    }

    searchContry(contry:string):Observable<Country[]>{
      const url = `${this.urlService}/name/${contry}`
      return this.httpClient.get<Country[]>(url)
              .pipe( 
                  catchError( () => of ([]) ) 
                );
    }

    searchRegion(region:string):Observable<Country[]>{
      const url = `${this.urlService}/region/${region}`
        return this.httpClient.get<Country[]>(url)
                .pipe( 
                    catchError( () => of ([]) ) 
                  );
    }

}