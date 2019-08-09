import { Component, OnInit, NgModule, EventEmitter } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public nightmode = true;
  constructor(private service:NavbarService) {
    this.service.setNight(this.nightmode);
  }

  ngOnInit() {
  }
  Mode(bool: boolean, nav) {
    if (bool) {
      this.nightmode = bool;
      nav.classList.remove("navbar-warning");
      nav.classList.remove("bg-warning");
      nav.classList.add("navbar-dark");
      nav.classList.add("bg-dark");
    }
    else {
      this.nightmode = bool;
      nav.classList.remove("navbar-dark");
      nav.classList.remove("bg-dark");
      nav.classList.add("navbar-warning");
      nav.classList.add("bg-warning");
    }
    this.service.setNight(this.nightmode);
  }


}
