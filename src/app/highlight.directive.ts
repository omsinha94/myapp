import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
  }
  
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }

  @HostListener('click') onClick(){
    this.border = '5px solid red'
  }

}
