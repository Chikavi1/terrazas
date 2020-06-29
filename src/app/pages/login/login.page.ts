import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(private toastController: ToastController, private navCtrl: NavController ,private dataService: DataService) {
   
  }
  login(){
    console.log(this.email);
    console.log(this.password);
    this.dataService.login(this.email,this.password).subscribe(data=>{
      if(data.access_token){
        localStorage.setItem('token',data.access_token);
        localStorage.setItem('user_id',data.user_id);
        localStorage.setItem('name',data.user_name);
        this.navCtrl.navigateForward(['/profile']);
      }else{
        this.presentToast("Verifica si tu correo o contraseña son correctos.","danger");
      }
    });
  }
  ngOnInit() {
  }

  async presentToast(data,color) {
    const toast = await this.toastController.create({
      message: data,
      duration: 1500,
      color: color
    });
    toast.present();
  }

}
