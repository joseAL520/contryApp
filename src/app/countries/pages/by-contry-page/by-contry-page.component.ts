import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: [
  ]
})
export class ByContryPageComponent {
  
  public country: Country[] = []

  constructor(private contriesService : ContriesService){}

  searchByContry(term:string):void{
    this.contriesService.searchContry(term)
          .subscribe(contries => this.country = contries);
   }
}
