import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'conuntry-table',
  templateUrl: './conuntry-table.component.html',
  styles: [
  ]
})
export class ConuntryTableComponent {
  
@Input()
public countries : Country[] = []
}
