import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "black";
  }
  // @HostListener("click") onClicks(){
  //   this.highlight()
  // }
  // private highlight(){
  //   this.elem.nativeElement.style.backgroundColor = "black";
  // }
}
