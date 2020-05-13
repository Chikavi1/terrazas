import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
  }
  beforePage(){
    this.navCtrl.navigateBack('/index');
  }

  NextPage(){
    this.navCtrl.navigateForward('/available');
  }
}
