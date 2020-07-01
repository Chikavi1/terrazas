import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController, NavController, ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  darkMode: boolean =false;
  user:any = [];
  reservas;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween:3 
  }

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    private toastController:ToastController,
    private modalCtrl: ModalController,
    private iab: InAppBrowser) { }

  cambio(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark')
  }

  buttonClick(pagina){
    let options : InAppBrowserOptions = {
      zoom: 'no',
      hideurlbar: 'yes', // hide the url toolbar
      hidenavigationbuttons: 'yes', 
    }
    this.iab.create(pagina,'_self',options);
  }
  
  ngOnInit() {
    let token = localStorage.getItem('token');
    this.dataService.get_user(token).subscribe(data=>{
     this.user = data;
     console.log(data);
     this.dataService.getReserves(this.user.id).subscribe(data=>{
      this.reservas = data;
      console.log(this.reservas);
     });
    });
    console.log(this.user.id);

  }

  cerrar_sesion(){
    let token = localStorage.getItem('token');
    this.dataService.logout(token).subscribe(data=>{
      console.log(data);
      if(data.message === 'Sesión Cerrada'){
        localStorage.removeItem('user_id');
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        this.presentToast("Sesión Cerrada","tertiary");
        this.exit();

        this.goToLogin();

      }
     });
  }

  showTerrace(id){
    console.log(id);
    this.navCtrl.navigateForward(`/show/${id}`);
  }
  
  async presentToast(data,color) {
    const toast = await this.toastController.create({
      message: data,
      duration: 1100,
      color: color
    });
    toast.present();
  }
  goToLogin(){
    this.modalCtrl.dismiss().then( () => {
      this.presentModal(LoginPage);

    });
  }

  async presentModal(component) {
    const modal = await this.modalCtrl.create({
      component: component,
      cssClass: 'my-custom-class',
      showBackdrop: false,
      presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }

  exit(){
    this.modalCtrl.dismiss();
  }

}
