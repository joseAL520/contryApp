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

  public contry: Country[] = []

  constructor(private ContriesService:ContriesService){}


  searchByCapital(term:string):void{
   this.ContriesService.searchCapital(term)
         .subscribe(contries => this.contry = contries);
  }

  
}
