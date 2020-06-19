import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreResultPageRoutingModule } from './score-result-routing.module';

import { ScoreResultPage } from './score-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreResultPageRoutingModule
  ],
  declarations: [ScoreResultPage]
})
export class ScoreResultPageModule {}
