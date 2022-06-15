import {Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
  selector: '[appMove]'
})
export class MoveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.classList.add('card--moving')
  }

  @HostListener('mouseup') onMouseUp() {
    this.el.nativeElement.classList.remove('card--moving')
  }
}
