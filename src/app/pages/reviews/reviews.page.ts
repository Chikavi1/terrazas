import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage {
rate = 4;
  constructor(private modalCtrl: ModalController) { }



  exit(){
    this.modalCtrl.dismiss();
  }
}
