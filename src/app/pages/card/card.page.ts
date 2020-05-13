import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import * as moment from 'moment';
import { isValid } from 'cc-validate';
import { DataService } from '../../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})

export class CardPage implements OnInit {

  paymentAmount:string = '3.33';
  currency:string= 'USD';
  
  stripe_Key = 'pk_test_6Lh2y6pOLjooJHlRimCh1U7J00klDjsUau';
  cardDetails:any = {};


  numero:string;
  titular:string;
  expiration:string;
  cvc:string;

  month:any;
  year:any;
  card_expiration:string;

  yearLimitIonDateTime;

  logoimg = null;

  darkMode: boolean =false;

  constructor(
    private stripe:Stripe,
    private dataService: DataService,
    private navCtrl: NavController) {
    this.yearLimitIonDateTime = moment().year()+8;
    
  }
  ngOnInit(){
    this.dataService.getPosts().subscribe(posts => {
      if(posts.status == "Success"){
        console.log("Compra Satisfecha");
      }
    });
  }

  cambio(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark')
  }

   GetCardType(number){
    let result: any = isValid(number);
    if(result.isValid){
      this.logoimg = result.cardType;
      console.log(this.logoimg);
    }
  }

  ParseDataTimeToCardExpiration(date) {
    this.month =  moment(date).month()+1;
    this.year =  moment(date).year();
    this.card_expiration = this.month+'/'+this.year;
 }

 beforePage(){
   this.navCtrl.navigateBack('/available');
 }

 nextPage(){
   this.navCtrl.navigateForward('/success');
 }
  payWithStripe() {
    this.nextPage();

  //   this.stripe.setPublishableKey(this.stripe_Key);

  //   this.cardDetails = {
  //     number: this.numero,
  //     expMonth: this.month,
  //     expYear: this.year,
  //     cvc: this.cvc
  //   }

  //   console.log(this.cardDetails);

  //   this.stripe.createCardToken(this.cardDetails)
  //     .then(token => {
  //       // Api con la cantidad 
  //       console.log(token);
  //     })
  //     .catch(error => console.error(error));
   }

}
