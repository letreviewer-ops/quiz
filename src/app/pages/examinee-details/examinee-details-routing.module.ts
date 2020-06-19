import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamineeDetailsPage } from './examinee-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExamineeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamineeDetailsPageRoutingModule {}
