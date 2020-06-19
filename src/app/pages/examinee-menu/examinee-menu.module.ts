import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamineeMenuPageRoutingModule } from './examinee-menu-routing.module';

import { ExamineeMenuPage } from './examinee-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamineeMenuPageRoutingModule
  ],
  declarations: [ExamineeMenuPage]
})
export class ExamineeMenuPageModule {}
