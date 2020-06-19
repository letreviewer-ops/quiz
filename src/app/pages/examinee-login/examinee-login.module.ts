import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamineeLoginPageRoutingModule } from './examinee-login-routing.module';

import { ExamineeLoginPage } from './examinee-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamineeLoginPageRoutingModule
  ],
  declarations: [ExamineeLoginPage]
})
export class ExamineeLoginPageModule {}
