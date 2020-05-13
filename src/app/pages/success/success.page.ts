import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  title = 'app';
  elementType = 'url';
  createdCode = 'n12j3n12j31ias03n';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome(){
    this.navCtrl.navigateBack('/index');
  }

}
