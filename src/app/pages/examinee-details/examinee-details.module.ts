import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamineeDetailsPageRoutingModule } from './examinee-details-routing.module';

import { ExamineeDetailsPage } from './examinee-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamineeDetailsPageRoutingModule
  ],
  declarations: [ExamineeDetailsPage]
})
export class ExamineeDetailsPageModule {}
