import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessPageRoutingModule } from './success-routing.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { SuccessPage } from './success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    SuccessPageRoutingModule
  ],
  declarations: [SuccessPage]
})
export class SuccessPageModule {}
