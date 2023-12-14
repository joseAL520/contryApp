import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/contry';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styles: [
  ]
})
export class ContryPageComponent implements OnInit{
  
  public country: Country[] = []

  constructor( 
    private activatedRouter: ActivatedRoute,
    private contriesService: ContriesService,
    private router: Router,
    ){}


  ngOnInit(): void {
    this.activatedRouter.params.pipe(
       switchMap(({name})=> this.contriesService.searchCountryByAlphaCode(name)),
    )
    
    .subscribe(country=> {
      
      if(!country){
          return this.router.navigateByUrl('');
      }
      console.log('Tenmos paiis');
      return;
    })
  }


}
