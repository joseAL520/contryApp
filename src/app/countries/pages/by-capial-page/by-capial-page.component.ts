import { Component } from '@angular/core';

@Component({
  selector: 'contries-by-capial-page',
  templateUrl: './by-capial-page.component.html',
  styles: [
  ]
})
export class ByCapialPageComponent {
  
  

  searchByCapital(term:string):void{
    console.log('Desde BycapitalPage');  
    console.log({term});
  }

}
