import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {
  @Input('appInputFormate') formate;
  // @HostListener('focus') onFocus() {
  //   console.log('on focus')
  // }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.formate === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase()
    else this.el.nativeElement.value = value.toUpperCase()
  }
  constructor(private el: ElementRef) { }

}
