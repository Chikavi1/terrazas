import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-available',
  templateUrl: './available.page.html',
  styleUrls: ['./available.page.scss'],
})
export class AvailablePage {
  
  slideOpts = {
    slidesPerView: 1.7,
    spaceBetween:10 
  }

  day;
  check = false;
  data:any;
  terraceId;

  minimum_day;
  constructor( private navCtrl: NavController,
               private dataService: DataService,
               public toastController: ToastController,
               public router:Router,
               private route: ActivatedRoute) {
               
                this.route.queryParams.subscribe(params =>{
                  this.data = params;
                  this.terraceId = params.id;
                  console.log(this.data);
                });
   }

  beforePage(){
    this.navCtrl.navigateBack(['/show/'+this.terraceId]);
  }

  async presentToast(data,color) {
    const toast = await this.toastController.create({
      message: data,
      duration: 1100,
      color: color
    });
    toast.present();
  }

  verificatedDate(){
    this.dataService.verifiedReserve(this.convertDate(this.day))
    .subscribe(data => {
        this.presentToast(data.message,data.status);
        console.log(data.message);
    });
  }

  nextPage(){
    const extras: NavigationExtras = {
      queryParams:{
        name: this.data.name,
        price: this.data.price
      }
    }
    this.navCtrl.navigateForward(['/card'],extras);
}

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
  }

  ParseDataTimeToCardExpiration(day){
    this.dataService.verifiedReserve(this.convertDate(this.day))
    .subscribe(data => {
      if(data.status == 'success'){
          this.check = true;
      }else{
        this.check = false;
      }
      this.presentToast(data.message,data.status);
    });
  }
}
