import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import { LoginPage } from '../login/login.page';
import { LoginPageModule } from '../login/login.module';
import { ProfilePage } from '../profile/profile.page';
import { ProfilePageModule } from '../profile/profile.module';
import { RegisterPage } from '../register/register.page';
import { RegisterPageModule } from '../register/register.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
@NgModule({
  entryComponents: [
    LoginPage,
    ProfilePage,
    RegisterPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    LoginPageModule,
    ProfilePageModule,
    RegisterPageModule,
    NgxQRCodeModule
  ],
  declarations: [ReservationPage]
})
export class ReservationPageModule {}
