import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LugarPage } from '../lugar/lugar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController ) {}

  NavegarALugar(){
    //this.router.navigate(['lugar'])
    this.navCtrl.navigateForward('/lugar')
  }

}
