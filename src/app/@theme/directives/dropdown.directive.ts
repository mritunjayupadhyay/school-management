import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[school-management-dropdown-directive]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !(this.isOpen);
    } else {
      this.isOpen = false;
    }
  }
}
