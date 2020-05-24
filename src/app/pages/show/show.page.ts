import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NavigationExtras, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  terraceId = null;
  terrace = [];
  services: any;
  reviews = [];
  images = [];
  dataParseNextPage;
  
  slideOpts = {
    slidesPerView: 1,
  }
  constructor(
              private navCtrl: NavController,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService,
              private router:Router ) {
    this.terraceId = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
      this.dataService.getTerrace(this.terraceId)
          .subscribe(data => {
            this.terrace = data.data;
            this.services = data.data.services.split(',');
            this.reviews = data.reviews;
            this.images = data.images;

            this.dataParseNextPage = {id: data.data.id,name: data.data.name, price: data.data.price};
          });
  }

  
  beforePage(){
    this.navCtrl.navigateBack('/index');
  }

  NextPage(){

    const extras: NavigationExtras = {
      queryParams:{
        id: this.dataParseNextPage.id,
        name: this.dataParseNextPage.name,
        price: this.dataParseNextPage.price

      }
    }
    this.navCtrl.navigateForward(['/available'],extras);
  }
}
