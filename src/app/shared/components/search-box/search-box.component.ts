import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{
 
  
  private deboUncer: Subject<string> = new Subject<string>()

  @Input()
  public placeHolder : string = '';

  @Output()
   public onValue = new EventEmitter<string>();

   @Output()
   public onDebonce = new EventEmitter<string>();
  
   ngOnInit(): void {
    this.deboUncer
    .pipe(
      debounceTime(300))
    .subscribe(value => {
       this.onDebonce.emit(value)})
  }
  
   emitValue(value:string):void{
      this.onValue.emit(value);
   }

   oneKeyPress(searchTerm:string){
      this.deboUncer.next(searchTerm);
   }  


   
}
