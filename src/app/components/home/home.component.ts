import { ObjectsService } from './../../objects.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private mode :boolean ;
  private additem = "additem.png";
  constructor(public service: NavbarService,
    public objService: ObjectsService) { 
  }
  
  ngOnInit() {
  }

  getmode(){
    this.mode=this.service.isNight();
    return this.mode;
  }
  rarrangeObjs(){
    if(this.objService.isMore2())
    this.objService.setCurrent(false);
  }
  larrangeObjs(){
    if(this.objService.isMore2())
        this.objService.setCurrent(true);  
  }
  addCity(city,deg){
    this.objService.addObj(String(city.value),deg.value);
    city.value="";
    deg.value="";
    
  }

}
