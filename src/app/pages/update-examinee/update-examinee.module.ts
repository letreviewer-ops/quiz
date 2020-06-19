import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateExamineePageRoutingModule } from './update-examinee-routing.module';

import { UpdateExamineePage } from './update-examinee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateExamineePageRoutingModule
  ],
  declarations: [UpdateExamineePage]
})
export class UpdateExamineePageModule {}
