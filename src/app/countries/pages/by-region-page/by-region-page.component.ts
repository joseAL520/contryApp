import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  
  public country: Country[] = []

  constructor(private contriesService:ContriesService){}


  searchByRegion(term:string):void{
   this.contriesService.searchRegion(term)
         .subscribe(contries => this.country = contries);
  }

}
