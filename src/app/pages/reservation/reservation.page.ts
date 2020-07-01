import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, NavController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { LoginPage } from '../login/login.page';
import * as moment from 'moment';
import { ReviewsPage } from '../reviews/reviews.page';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage{
  isAuth:boolean;
  reservations;
  name;
  today;

  slideOpts = {
    slidesPerView: 1,
    spaceBetween:3,
    pager: true
  }

  constructor(private dataService:DataService,
              private modalController:ModalController,
              private navCtrl: NavController) { 
               
                var dateTime = moment( '2016-06-30');
                var full = dateTime.format('dddd D, MMMM YYYY');
                console.log(full);
  }

  ionViewWillEnter () {
    console.log("se ejecuta");
    if(localStorage.getItem("token")){
      this.isAuth = true;
      this.name = localStorage.getItem("name");
      this.dataService.getReserves(localStorage.getItem("user_id")).subscribe(data=>{
        this.reservations = data;
       
        this.reservations.map(function(reservation){
          moment.locale('es');
          var dateTime = moment(reservation.day);
          reservation.day = dateTime.format('dddd, D MMMM YYYY');
          return reservation;
        });

       });
    }else{
      this.isAuth = false;
    }
  }

  openReview(){
    this.presentModal(ReviewsPage);
  }
  openModal(){
    if(localStorage.getItem('token')){
      this.presentModal(ProfilePage);
    }else{
      this.presentModal(LoginPage);
    }
  }

  showTerrace(id){
    this.navCtrl.navigateForward(`/show/${id}`);
  }

  async presentModal(component) {
    const modal = await this.modalController.create({
      component: component,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(()=>{
      if(localStorage.getItem("token")){
        this.isAuth = true;
        this.name = localStorage.getItem("name");
        this.dataService.getReserves(localStorage.getItem("user_id")).subscribe(data=>{
          this.reservations = data;
          this.reservations.map(function(reservation){
            moment.locale('es');
            var dateTime = moment(reservation.day);
            reservation.day = dateTime.format('dddd, D MMMM YYYY');
            return reservation;
          });
         });
      }else{
        this.isAuth = false;
      }
    });
    return await modal.present();
  }


}
