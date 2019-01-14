import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isInappropriate = new EventEmitter<boolean>();
  quoteDelete(inappropriate:boolean){
    this.isInappropriate.emit(inappropriate);
  }
  constructor() { }

  ngOnInit() {
  }

}
