import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private nightmode:boolean;
  constructor() { }
  setNight(bool){
    this.nightmode=bool;
  }
  isNight(){
    return this.nightmode;
  }
}
