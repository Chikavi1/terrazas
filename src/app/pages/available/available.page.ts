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
                 
                this.minimum_day = new Date();               
                let minimum_month;

                function pad(s) { return (s < 10) ? '0' + s : s; }

                this.minimum_day = this.minimum_day.getFullYear()+"-"+pad(this.minimum_day.getMonth()+1)+"-"+pad(this.minimum_day.getDate()+1);
                console.log(this.minimum_day);
                this.route.queryParams.subscribe(params =>{
                  this.data = params;
                  console.log(this.data);
                  this.terraceId = params.id;
                });
   }

  beforePage(){
    this.navCtrl.navigateBack(['/show/'+this.terraceId]);
  }

  nextPage(){
    const extras: NavigationExtras = {
      queryParams:{
        id: this.data.id,
        img: this.data.img,
        name: this.data.name,
        price: this.data.price,
        day: this.convertDate(this.day,'-')
      }
    }
    this.navCtrl.navigateForward(['/card'],extras);
}
  
  verificatedDate(day){
    console.log(this.convertDate(this.day,'-'));
    this.dataService.verifiedReserve(this.convertDate(this.day,'-'),this.data.id)
    .subscribe(data => {
      if(data.status == 'success'){
          this.check = true;
      }else{
        this.check = false;
      }
      this.presentToast(data.message,data.status);
    });
  }

  convertDate(inputFormat,join) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth()+1),pad(d.getDate()) ].join(join)
  }

  async presentToast(data,color) {
    const toast = await this.toastController.create({
      message: data,
      duration: 1100,
      color: color
    });
    toast.present();
  }


}
