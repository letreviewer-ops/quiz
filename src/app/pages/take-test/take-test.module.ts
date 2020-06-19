import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeTestPageRoutingModule } from './take-test-routing.module';

import { TakeTestPage } from './take-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTestPageRoutingModule
  ],
  declarations: [TakeTestPage]
})
export class TakeTestPageModule {}
