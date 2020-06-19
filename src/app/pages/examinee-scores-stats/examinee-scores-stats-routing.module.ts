import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamineeScoresStatsPage } from './examinee-scores-stats.page';

const routes: Routes = [
  {
    path: '',
    component: ExamineeScoresStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamineeScoresStatsPageRoutingModule {}
