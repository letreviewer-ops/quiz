import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExamineePageRoutingModule } from './add-examinee-routing.module';

import { AddExamineePage } from './add-examinee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExamineePageRoutingModule
  ],
  declarations: [AddExamineePage]
})
export class AddExamineePageModule {}
