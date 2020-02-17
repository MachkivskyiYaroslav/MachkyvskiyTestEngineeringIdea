import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHamburger]'
})
export class HamburgerDirective {
  @Input('showBoolean') showSideBar: boolean;
  @HostBinding('class.open') isActive = false;
  @Output() valueChange = new EventEmitter<boolean>();
  constructor() {
  }

  @HostListener('window:resize') sideBarPositionChange() {
    if (window.innerWidth > 1032) {
      this.showSideBar = true;
      this.valueChange.emit(this.showSideBar);
    } else {
      this.showSideBar = false;
      this.valueChange.emit(this.showSideBar);
    }
  }

  @HostListener('click') open() {
    this.valueChange.emit(true);
    this.isActive = !this.isActive;
  }
}
