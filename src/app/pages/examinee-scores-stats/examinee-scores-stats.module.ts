import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamineeScoresStatsPageRoutingModule } from './examinee-scores-stats-routing.module';

import { ExamineeScoresStatsPage } from './examinee-scores-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamineeScoresStatsPageRoutingModule
  ],
  declarations: [ExamineeScoresStatsPage]
})
export class ExamineeScoresStatsPageModule {}
