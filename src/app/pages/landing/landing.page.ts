import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  Existlocation = false;
  location;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  getLocation(){
    this.Existlocation = true;
  }

  checkCity(e){
    console.log(e);
    if(e.target.value.length > 4){
      this.Existlocation = true;
      console.log('caca');
    }
  }
  NextPage(){
    this.navCtrl.navigateForward('/index');
  }

}
