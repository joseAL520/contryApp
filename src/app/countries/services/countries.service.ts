import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/contry';

@Injectable({providedIn: 'root'})
export class ContriesService {
    
  private urlService:string = 'https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }
    


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