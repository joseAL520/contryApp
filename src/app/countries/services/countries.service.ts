import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/contry';

@Injectable({providedIn: 'root'})
export class ContriesService {
    
  private url:string = 'https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }
    


    searchCapital( contry:string):Observable<Country[]>  {
        return this.httpClient.get<Country[]>(`${this.url}/capital/${contry}`);
    }
}