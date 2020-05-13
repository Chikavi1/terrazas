import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-available',
  templateUrl: './available.page.html',
  styleUrls: ['./available.page.scss'],
})
export class AvailablePage implements OnInit {
  
  slideOpts = {
    slidesPerView: 1.7,
    spaceBetween:10 
  }

  constructor(private navCtrl: NavController) {

   }

  ngOnInit() {
    }

  nextPage(){
    this.navCtrl.navigateForward('/card');
  }
  ParseDataTimeToCardExpiration(cacas){

  }
}
