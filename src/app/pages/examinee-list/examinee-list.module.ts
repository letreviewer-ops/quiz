import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamineeListPageRoutingModule } from './examinee-list-routing.module';

import { ExamineeListPage } from './examinee-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamineeListPageRoutingModule
  ],
  declarations: [ExamineeListPage]
})
export class ExamineeListPageModule {}
