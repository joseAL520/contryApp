import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'contries-by-capial-page',
  templateUrl: './by-capial-page.component.html',
  styles: [
  ]
})
export class ByCapialPageComponent {

  public country: Country[] = []
  public isLoading:boolean = false;
  constructor(private ContriesService:ContriesService){}


  searchByCapital(term:string):void{
   this.isLoading = true  
   this.ContriesService.searchCapital(term)
         .subscribe(contries => {
           this.country = contries;
           this.isLoading = false;
         });
  }
          
          
}
