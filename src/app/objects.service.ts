import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  private pics: string[] = ['sunny.png', 'windy.png', 'rainy.png', 'snow.png'];
  private addit: string = 'additem.pg';
  private objs: any[] = [{ name: 'Cairo', degree: 55, pic: this.pics[0] },
  { name: 'Tokyo', degree: 10, pic: this.pics[1] },
  { name: 'Moscow', degree: -10, pic: this.pics[2] },
  { name: 'Ukrania', degree: -20, pic: this.pics[3] }
  ];
  private current: number[] = [0, 1];
  constructor() { }
  getObj1Name() {
    return this.objs[this.current[0]].name;
  }
  getObj1Deg() {
    return this.objs[this.current[0]].degree;
  }
  getObj1Pic() {
    return this.objs[this.current[0]].pic;
  }
  getObj2Name() {
    return this.objs[this.current[1]].name;
  }
  getObj2Deg() {
    return this.objs[this.current[1]].degree;
  }
  getObj2Pic() {
    return this.objs[this.current[1]].pic;
  }
  addObj(name: string, degree) {
    this.objs.push({
      name: name, degree: degree, pic:
        degree >= 30 ? this.pics[0] : degree >= 15 ? this.pics[1] : degree >= -4 ? this.pics[2] : this.pics[3]
    });
    this.current[0]=this.objs.length-2;
    this.current[1]=this.objs.length-1;
  }
  isMore2() {
    if (this.objs.length > 2)
      return true;
    else return false;
  }
  setCurrent(l: boolean) {
    if (l) {
      if (this.current[0]) {
        this.current[0]--;
        this.current[1]--;
      }
    }
    else {
      if (this.current[1] < this.objs.length - 1) {
        this.current[0]++;
        this.current[1]++;
      }
    }
  }
  deleteItem1() {
    if (this.objs.length > 2) {
      this.objs.splice(this.current[0], 1);
      if (this.current[0] !== 0) {
        this.current[0]--;
        this.current[1]--;
      }
    }
  }
  deleteItem2() {
    if (this.objs.length > 2) {
      this.objs.splice(this.current[1], 1);
      if (this.current[1] !== 1) {
        this.current[0]--;
        this.current[1]--;
      }
    }
  }

}
