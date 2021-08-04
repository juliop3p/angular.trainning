import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = 'tomato'; (evitar por segurança)
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'tomato'
    );
  }
}
