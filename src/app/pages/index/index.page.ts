import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

   slideOpts = {
    slidesPerView: 1.7,
    spaceBetween:10 
  }

  slideOptslarge = {
    slidesPerView: 1.1,
    spaceBetween:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  showMotel(){
    this.navCtrl.navigateForward('/show');
  }

}
