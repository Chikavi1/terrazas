import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  Existlocation = false;
  location;
  items;
  constructor(private navCtrl: NavController,
              private geolocation: Geolocation,
              private locations: DataService) { }

  ngOnInit() {
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);
      this.locations.getLocation(resp.coords.latitude,resp.coords.longitude)
      .subscribe(data => {
        console.log(data.features);
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    this.Existlocation = true;
  }

  checkCity(e){
    console.log(e.target.value);
    if(e.target.value.length > 4){
      this.Existlocation = true;
      localStorage.setItem('ciudad',e.target.value);
    }
  }

  initializeItems(){
    this.items = ["Jalisco","Nuevo leon", "Ciudad de Mexico"];
    }


  NextPage(){
    this.navCtrl.navigateForward('/index');
  }

}
