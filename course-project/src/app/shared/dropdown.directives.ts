import { Directive, Input, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isDropped = false;

  @HostListener('click') toggleDropdown() {
    this.isDropped = !this.isDropped;
  };
}
