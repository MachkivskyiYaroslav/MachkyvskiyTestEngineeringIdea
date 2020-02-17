import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  opened = true;
  @Output() clickHamburger = new EventEmitter<boolean>();

  constructor() {
  }



  open(opened) {
    this.clickHamburger.emit(opened);
  }
}
